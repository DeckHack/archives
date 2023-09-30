(function () {
    /**
     * Responds back to requesting parent (the Mac app) with success status.
     */
    function handleSessionData(e) {
        window.parent.postMessage({
            migrationSuccessful: true
        }, e.origin);
    }

    window.addEventListener('message', handleSessionData, false);
}());
