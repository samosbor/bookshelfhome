pipeline {
  agent any
  stages {
    stage('npm intstall') {
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
        sh 'npm run start'
      }
    }

  }
}