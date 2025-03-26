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

        // Etapa para instalar las dependencias y preparar el entorno
        stage('Setup Environment') {
            steps {
                script {
                    echo "hola"
                    sh 'node -v || curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && apt-get install -y nodejs'
                    sh 'npm install'
                }
            }
        }

        // Etapa para ejecutar los tests de WebDriverIO
        stage('Run Trello Tests') {
            steps {
                script {
                    sh 'npm run wdio'
                }
            }
        }
    }

    post {
        always {

            archiveArtifacts artifacts: 'reports/**/*.xml', fingerprint: true
            junit '**/reports/results-*.xml'
        }
    }
}

