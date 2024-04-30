const {ObservablePromise} = require("sails-adminpanel/lib/observablePromise");
const path = require('path');

class AboutFrontendStep {
    canBeSkipped = false;
    description = 'About company';
    ejsPath = path.resolve(__dirname, `../views/installSteps/about_frontend_step.ejs`);
    id = 'about-frontend-step';
    scriptsUrl = '';
    sortOrder = 0;
    groupSortOrder = 1;
    stylesUrl = '';
    title = 'Admin Frontend';
    badge = 'admin-frontend';
    isSkipped = false;
    settingsKeys = ["ADMIN_FRONTEND_RECIPE"];
    renderer = "ejs";
    isProcessed = false;
    finallyDescription = null;

    async check() {
        let recipe = await Settings.get("ADMIN_FRONTEND_RECIPE");
        if (recipe) {
            return true;
        }

        return this.isProcessed;
    }

    async process(data, context) {
        // save data in context to process it on last step
        Object.assign(context, data);
        this.isProcessed = true;
    }

    async skip() {
        this.isProcessed = true;
    }

    async finally() {
        return
    }
}

module.exports = AboutFrontendStep;
