pipeline {
  agent {
    node {
      label 'host'
    }

  }
  stages {
    stage('npm install') {
      steps {
        npm 'install'
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
        npm 'run start-prod'
      }
    }

  }
}