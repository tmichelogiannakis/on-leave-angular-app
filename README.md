# Run code on leave an angular app

`ngOnDestroy` lifecycle hook does not fire when the browser tab is refreshed, closed or the URL is changed. We have to listen to beforeunload and/or unload events with the use of a `@HostListener` decorator.
