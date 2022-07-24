pipeline {
  agent {
    node {
      label 'host'
    }

  }
  stages {
        stage('Install NPM') {
          steps {
            sh 'sudo apt install nodejs'
            sh 'sudo apt install npm'
            sh 'sudo apt install npx'
          }
        }

        
    stage('npm install') {
      steps {
        sh 'npm install'
      }
    }

    stage('migrate') {
      steps {
        sh 'npx prisma migrate'
        sh 'npx prisma migrate deploy'
      }
    }

    stage('start') {
      steps {
        sh 'npm run start-prod'
      }
    }

  }
}