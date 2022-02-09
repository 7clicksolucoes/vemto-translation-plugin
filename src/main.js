module.exports = (vemto) => {

    return {

        canInstall() {
            return true
        },
        
        addMiddlewares() {
            kernelFileContent = vemto.readProjectFile('/app/Http/Kernel.php')  
            
            let phpParser = vemto.parsePhp(kernelFileContent),
                arrays = phpParser.getNestedArraysByName('web')

            phpParser.onArray(arrays[0])
                .addItem('\\App\\Http\\Middleware\\Localization::class')
    
            let newKernelFileContent = phpParser.getFormattedCode()

            vemto.writeProjectFile('/app/Http/Kernel.php', newKernelFileContent)
            vemto.registerProjectFile('/app/Http/Kernel.php')
        },

        renderLocalizationControllers() {
            let basePath = 'app/Http/Controllers/',
                options = {
                    formatAs: 'php'
                }
            vemto.renderTemplate('files/LocalizationController.vemtl', `${basePath}/LocalizationController.php`, options)
        },

        renderLocalizationMiddleware() {
            let basePath = 'app/Http/Middleware/',
                options = {
                    formatAs: 'php'
                }
            vemto.renderTemplate('files/LocalizationMiddleware.vemtl', `${basePath}/Localization.php`, options)
        },


        // Route::get('lang/{locale}', [App\Http\Controllers\LocalizationController::class, 'index']);

        composerPackages(packages) {
            // Adding packages
            packages.require['luisprmat/laravel-lang-installer'] = '^1.2.1'
        
            return packages
        },

        addLangData(){
            let data = vemto.getPluginData()
            
            vemto.log.message(`retorno dos campos ${data.translation}`)

            vemto.executeArtisan(`lang:add en`)
            vemto.executeArtisan(`lang:add pt_BR`)
            vemto.executeArtisan(`lang:add de`)
            vemto.executeArtisan(`lang:add pt_BR --no-default`)
        },
        
        templateReplacements() {
            let basePath = '/views/frameworks/bootstrap'
            
            vemto.replaceTemplate(`${basePath}/AppNav.vemtl`, 'files/AppNav.vemtl')
        },

        beforeCodeGenerationEnd() {
            vemto.log.info(`Config translation`)
            
            this.addMiddlewares()
            this.renderLocalizationMiddleware()
            this.renderLocalizationControllers()
            this.addLangData()
            this.templateReplacements()
            //this.addRoute()

        },
        
    }

}