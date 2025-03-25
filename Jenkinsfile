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
                    sh 'mkdir -p reports'
                    sh 'npm install'
                }
            }
        }


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
            junit '**/reports/**/*.xml'  
        }
    }

}
