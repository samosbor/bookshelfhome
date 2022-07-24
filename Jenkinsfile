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
        npm 'npx prisma migrate'
        npm 'prisma migrate'
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