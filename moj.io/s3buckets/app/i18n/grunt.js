grunt.loadNpmTasks('grunt-google-translate');

grunt.initConfig({
    google_translate: {
        default_options: {
            options: {
                srcPath: 'en.json',
                sourceLanguageCode: 'en',
                googleApiKey: 'AIzaSyDuW1FrTw0XwFteuAaIaOiGZOv_KjvXZZo',
                restrictToLanguages: ['cs', 'de']
            }
        }

    }
});