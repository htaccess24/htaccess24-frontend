(function (global) {
    //var baseURL = '/node_modules';
    var paths = {
        'npm:': 'node_modules/'
    };

    var map = {
        'app': 'app',
        '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
        '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
        '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
        '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
        'rxjs': 'npm:rxjs',
        'angular2-highlight-js': 'npm:angular2-highlight-js/lib',
        'ng2-sticky-kit': 'npm:ng2-sticky-kit',
        'ngx-rating': 'npm:ngx-rating',
        //'string.prototype.codepointat': 'npm:string.prototype.codepointat/codepointat.js',

        //'angular2-emojify': 'npm:angular2-emojify/build/src'
        'angular2-emojify': 'npm:angular2-emojify/build/src',
        'node-emoji': 'npm:node-emoji/lib',
    };

    var packages = {
        'app':                      { main: 'main.js', defaultExtension: 'js' },
        'rxjs':                     { defaultExtension: 'js' },
        //@angular/forms':           { main: "index.js", defaultExtension: "js" },
        'angular2-highlight-js':    { main: 'highlight-js.module', defaultExtension: 'js' },
        'ng2-sticky-kit':           { defaultExtension: 'js' },
        //'string.prototype.codepointat':  { defaultExtension: 'js' },
        'angular2-emojify':         { main: 'index.js' },
        'node-emoji':               { main: 'emoji.js' },
        'ngx-rating':               { main: 'index.js', defaultExtension: 'js' }
    };

    /*var ngPackageNames = [
        'core',
        'common',
        'compiler',
        'platform-browser',
        'platform-browser-dynamic',
        'http',
        'router',
        'router-deprecated',
        'upgrade'
    ];

    /*ngPackageNames.forEach(function (pkgName) {
        packages['@angular2/'+ pkgName +'/bundles'] = { main: pkgName +'.umd.js', defaultExtension: 'js' };
    });*/

    var config = {
        //baseURL: baseURL,
        paths: paths,
        map: map,
        packages: packages
    }

    System.config(config);
})(this);