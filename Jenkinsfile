pipeline {
  agent {
    node {
      label 'host'
    }

  }
  stages {
    stage('npm install') {
      parallel {
        stage('npm install') {
          steps {
            npm 'install'
            npm 'install -g npx --force'
          }
        }

        stage('Install NPM') {
          steps {
            sh 'sudo apt install nodejs'
            sh 'sudo apt install npm'
            sh 'sudo apt install npx'
          }
        }

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