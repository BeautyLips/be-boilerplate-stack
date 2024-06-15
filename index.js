#!/usr/bin/env node
import inquirer from "inquirer"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

/* ******************* */
/* Powered by Cor design pattern */
/* ******************* */

/* ******************* */
/* Configuration */
/* ******************* */

const FRAMEWORK_TYPES = {
  // "react": "React",
  // "nextjs": "NextJs",
  vue: "Vue",
  // "nuxtjs": "NuxtJs"
}

const PROJECT_TYPES = {
  boilerplate: "Boilerplate",
  // "template" : "Template"
}

const VUE_BOILERPLATE_CLASSES = {
  "vue-playground-default": "Playground default",
  "vue-base-router-fetcher": "Base + Router + Fetcher",
  "vue-base": "Base",
}

const DIALOG_KEY = {
  frameworkType: "frameworkType",
  projectType: "projectType",
  projectClass: "projectClass",
  projectName: "projectName",
}

/* ******************* */
/* Classes */
/* ******************* */

class Handler {
  #nextHandler

  setNext(handler) {
    this.#nextHandler = handler
    return this.#nextHandler
  }

  async handle(request) {
    if (this.#nextHandler) {
      return this.#nextHandler.handle(request)
    }

    return null
  }
}

class Frameworks extends Handler {
  async handle() {
    const answers = await inquirer.prompt([
      {
        type: "list",
        name: DIALOG_KEY.frameworkType,
        message: "Select framework",
        choices: Object.values(FRAMEWORK_TYPES),
      },
    ])

    return super.handle({ ...answers })
  }
}

class Types extends Handler {
  async handle(prevAnswers) {
    const answers = await inquirer.prompt([
      {
        type: "list",
        name: DIALOG_KEY.projectType,
        message: "Select type",
        choices: Object.values(PROJECT_TYPES),
      },
    ])

    return super.handle({ ...prevAnswers, ...answers })
  }
}

class VueBoilerplateClasses extends Handler {
  async handle(answersPrev) {
    if (
      answersPrev.projectType === PROJECT_TYPES.boilerplate &&
      answersPrev.frameworkType === FRAMEWORK_TYPES.vue
    ) {
      const answers = await inquirer.prompt([
        {
          type: "list",
          name: DIALOG_KEY.projectClass,
          message: "Select class",
          choices: Object.values(VUE_BOILERPLATE_CLASSES),
        },
      ])

      return super.handle({ ...answersPrev, ...answers })
    } else {
      return super.handle({ ...answersPrev })
    }
  }
}

class ProjectName extends Handler {
  async handle(answersPrev) {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: DIALOG_KEY.projectName,
        message: "Select name",
        default:
          `${answersPrev.frameworkType}-${answersPrev.projectType}`.toLowerCase(),
      },
    ])

    return super.handle({ ...answersPrev, ...answers })
  }
}

class Setup extends Handler {
  async handle(answersPrev) {
    const { frameworkType, projectType, projectClass, projectName } =
      answersPrev

    let selectedProjectFolder

    if (
      frameworkType === FRAMEWORK_TYPES.vue &&
      projectType === PROJECT_TYPES.boilerplate
    ) {
      selectedProjectFolder = Object.entries(VUE_BOILERPLATE_CLASSES).find(
        ([folderName, question]) => question === projectClass,
      )?.[0]
    }

    if (!selectedProjectFolder) {
      console.log(`Coming soon... 😭`)
      return process.exit(1)
    }

    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)

    const projectFolder = path.join(__dirname, selectedProjectFolder)

    if (!fs.existsSync(projectFolder)) {
      console.log(`Coming soon... 😭`)
      return process.exit(1)
    }

    const targetPath = path.resolve(projectName)

    if (fs.existsSync(targetPath)) {
      console.log(`Select name: ${projectName} already exist 😤`)
      return process.exit(1)
    }

    fs.cpSync(projectFolder, projectName, {
      recursive: true,
    })

    console.log("Project created 🥰")
  }
}

/* ******************* */
/* Run */
/* ******************* */

const handlers = [Frameworks, Types, VueBoilerplateClasses, ProjectName, Setup]

const handlersInstances = []

handlers.forEach((Handler) => {
  const instance = new Handler()
  handlersInstances.push(instance)
})

handlersInstances.forEach((h, index, arr) => {
  if (arr[index + 1]) {
    h.setNext(arr[index + 1])
  }
})

handlersInstances.at(0).handle()
