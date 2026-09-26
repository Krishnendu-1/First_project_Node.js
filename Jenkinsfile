pipeline {

    agent any

    tools {
        nodejs 'node-26'
    }

    environment {
        AWS_REGION = 'us-east-1'
        ECR_REPO   = 'my-node-app'
    }

    stages {

        stage('cleanWorkSpace') {
            steps {
                cleanWs()
            }
        }

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Krishnendu-1/First_project_Node.js.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t my-node-app .'
            }
        }

        stage('Terraform Init') {
            steps {
                    sh 'terraform init'
            }
        }

        stage('Terraform Plan') {
            steps {
                sh 'terraform plan'
            }
        }

        stage('Terraform Apply') {
            steps {
                sh 'terraform apply -auto-approve'
            }
        }
    }
}
