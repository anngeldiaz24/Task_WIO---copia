pipeline {
    agent any

    environment {
        NODE_VERSION = '22'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'TASK_WITH_POM', url: 'https://github.com/anngeldiaz24/Task_WIO---copia.git'
            }
        }

        stage('Setup Environment') {
            steps {
                script {
                    sh 'node -v || curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && apt-get install -y nodejs'
                    // Instalar dependencias del proyecto
                    sh 'npm install'
                }
            }
        }

        stage('Run UI Tests') {
            steps {
                script {
                    sh 'npx wdio run wdio.conf.js'
                }
            }
        }

        stage('Run API Tests') {
            steps {
                script {
                    sh 'npm run wdio'
                }
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'reports/**/*.json', fingerprint: true
            junit 'reports/junit-results.xml'
        }
    }
}
