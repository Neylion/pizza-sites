Playground website for trying out different tools and technologies.

## Deployment

Push to master will trigger the deployment. Currently using firebase for hosting.

The deployed website can be found on the url: https://pizza-sites-be627.web.app/

### CI/CD Environment variables

The env variables are stored within the github repo secret WEBSITE_ENV_PRODUCTION.
The file is write only and is only used for the CI/CD pipeline (not meant as secrets storage/versioning).

To update the secret:

- Make the updates to your local .env file (Note that Vite will only recognize `VITE_` prefixed keys)
- Copy the base64 encoded version of your .env file (`base64 .env | pbcopy`)
- Paste the copied content into the repo secret.

The changes will take effect on the next continuous deployment.
