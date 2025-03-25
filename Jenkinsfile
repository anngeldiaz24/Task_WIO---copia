pipeline {
    agent any

    environment {
        NODE_VERSION = '22'
    }

    stages {
        // Etapa para hacer el checkout del código desde Git
        stage('Checkout') {
            steps {
                git branch: 'TASK_WITH_POM', url: 'https://github.com/anngeldiaz24/Task_WIO---copia.git'
            }
        }

        // Etapa para instalar las dependencias y preparar el entorno
        stage('Setup Environment') {
            steps {
                script {
                    // Crear carpeta para reportes si no existe
                    sh 'mkdir -p reports'
                    // Instalar dependencias de Node.js
                    sh 'npm install'
                }
            }
        }

        // Etapa para ejecutar los tests de WebDriverIO
        stage('Run Trello Tests') {
            steps {
                script {
                    sh 'npm run wdio'

                    sh 'ls -R reports'
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

