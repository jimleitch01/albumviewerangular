def server = Artifactory.server 'OelanArtifactory'
def rtMaven = Artifactory.newMavenBuild()

pipeline {
    agent none
    options {
        buildDiscarder(logRotator(numToKeepStr:'3'))
        disableConcurrentBuilds()
        timeout(time: 30, unit: 'MINUTES')
        ansiColor('xterm')
    }
    stages {
        stage('Checkout SCM') {
            agent any
            steps {
                checkout scm
            }
        }
        stage('Build') {
            agent {
                docker {
                    image 'alexsuch/angular-cli:1.4.8'
                    args ' -v $PWD:/app alexsuch/angular-cli:1.4.8 -w /app'
                }
            }
            steps {
                sh '''
                    ng build
                '''
            }
        }
        stage('Unit Test') {
            agent {
                docker {
                    image 'maven:3-alpine'
                    args '-v $PWD/spring-petclinic:/src -v $HOME/.m2:/root/.m2 -w /src'
                }
            }
            steps {
                sh 'mvn test -Dmaven.test.failure.ignore=true'
            }
        }
        stage('Upload Artifacts') {
            agent any
            steps {
                sh 'sleep 8'
            }
        }
        stage('Build Container') {
            agent any
            steps {
                sh 'docker build --tag=oelanbv-docker.jfrog.io/petclinic-fatjar:1.0 -f Dockerfile.fatjar .'
            }
        }
        stage('Push Container') {
            agent any
            steps {
                withCredentials([usernamePassword(credentialsId: 'ab742a74-7d2c-4a1c-9dc3-f2b8ab19c2d6', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
                    sh '''
                        docker login -u$USER -p $PASS oelanbv-docker.jfrog.io
                        docker push oelanbv-docker.jfrog.io/petclinic-fatjar:1.0
                    '''
                }
            }
        }
        stage('Deploy Container') {
            agent any
            steps {
                withCredentials([usernamePassword(credentialsId: 'ab742a74-7d2c-4a1c-9dc3-f2b8ab19c2d6', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
                    configFileProvider([configFile(fileId: '6c6dfb09-62a7-4b88-8cb7-c4e94b75632f', targetLocation: 'dcos.toml')]) {
                        sh '''
                            curl -o /usr/local/bin/dcos https://downloads.dcos.io/binaries/cli/linux/x86-64/dcos-1.10/dcos
                            chmod a+x /usr/local/bin/dcos
                            mkdir -p ~/.dcos/clusters/b3665065-1569-4fa1-a2df-d0470a6f21fc/clusters
                            cp dcos.toml ~/.dcos/clusters/b3665065-1569-4fa1-a2df-d0470a6f21fc/dcos.toml
                            chmod 0600 ~/.dcos/clusters/b3665065-1569-4fa1-a2df-d0470a6f21fc/dcos.toml
                        '''
                    }
                    sh '''
                        dcos cluster attach oelan-lab-cicd
                        dcos cluster list --attached
                    '''
                    sh '''
                        dcos marathon app update --force petclinic < marathon-petclinic.json
                        dcos marathon app restart --force petclinic
                        sleep 120
                    '''
                }
            }
        }
        stage('Smoke Test') {
            agent {
                docker {
                    image 'maven:3-alpine'
                    args '-v $PWD/spring-petclinic:/src -v $HOME/.m2:/root/.m2 -w /src'
                }
            }
            steps {
                sh 'mvn clean -e -X test -P smokeTest'
            }
        }
    }
}
