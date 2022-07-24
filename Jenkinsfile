pipeline {
  agent {
    node {
      label 'host'
    }

  }
  stages {
    stage('Install NPM') {
      steps {
        sh 'apt install nodejs'
        sh 'apt install npm'
        sh 'apt install npx'
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

    stage('start-prod') {
      steps {
        sh 'npm run start-prod'
      }
    }

  }
}