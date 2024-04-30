const {ObservablePromise} = require("sails-adminpanel/lib/observablePromise");
const {FrontendDeliveryService} = require("../src/fds");
let recipe = require("../templates/recipeTemplate.json");
const path = require("path");

class ColorsFrontendStep {
    canBeSkipped = false;
    description = 'Choose colors';
    ejsPath = path.resolve(__dirname, `../views/installSteps/colors_frontend_step.ejs`);
    id = 'colors-frontend-step';
    scriptsUrl = '';
    sortOrder = 1;
    groupSortOrder = 1;
    stylesUrl = '';
    title = 'Admin Frontend';
    badge = 'admin-frontend';
    isSkipped = false;
    settingsKeys = ["ADMIN_FRONTEND_RECIPE"];
    renderer = "ejs";
    isProcessed = false;
    finallyDescription = "Finally from colors";

    async check() {
        let recipe = await Settings.get("ADMIN_FRONTEND_RECIPE");
        if (recipe) {
            return true;
        }

        return this.isProcessed;
    }

    async process(data, context) {
        console.log("IN process COLORS", data, context)
        Object.assign(context, data);

        // fill recipe object using received fields
        recipe.description = context.restaurantDescription;
        recipe.snippets.head[0] = `<title>${context.restaurantName} | Food delivery</title>`;
        recipe.snippets.head[10] = `<meta name='description' content='${context.restaurantDescription}'>`;
        recipe.snippets.head[11] = `<meta property='og:title' content='${context.restaurantName}'>`;
        recipe.snippets.head[13] = `<meta property='og:description' content='${context.restaurantDescription}'>`;
        recipe.snippets.head[14] = `<meta property='og:url' content='${context.restaurantLink}'>`;
        recipe.constant.cssVariables["primary-color"] = context.primaryColor;
        recipe.constant.cssVariables["secondary-color"] = context.secondaryColor;
        recipe.constant.cssVariables["minor-color"] = context.minorColor;
        recipe.inventory.contacts.constant.variables.mail = context.restaurantEmail;
        recipe.inventory.contacts.constant.variables.point = context.restaurantAddress;
        recipe.inventory.contacts.constant.variables.time = context.restaurantWorkTime;
        recipe.inventory.contacts.constant.variables.phone = context.restaurantPhoneNumber;
        recipe.inventory.contacts.constant.variables.aboutText = context.restaurantDescription;
        recipe.inventory.footer.constant.variables.logoLink = context.uploadedFiles[0];
        recipe.inventory.header.constant.variables.logoRectangleLink = context.uploadedFiles[0];
        recipe.inventory.header.constant.variables.phoneNumber = context.restaurantPhoneNumber;
        recipe.environment.defaultLanguage = context.locale;
        recipe.environment.languages.push(context.locale);

        // save recipe in Settings model
        await Settings.set("ADMIN_FRONTEND_RECIPE", {value: recipe});
        this.isProcessed = true;
    }

    async skip() {
        this.isProcessed = true;
    }

    async toFinally() {
        await this.finally()
    }

    async finally() {
        // build config
        let recipe = await Settings.get("ADMIN_FRONTEND_RECIPE");
        await FrontendDeliveryService.processRecipe(recipe)
    }
}

module.exports = ColorsFrontendStep;
