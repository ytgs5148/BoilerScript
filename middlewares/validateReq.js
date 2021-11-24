export const validateReq = (req, res, next) => {
    // This is a just a demo!
    console.log('[MIDDLEWARE] Running test demo middleware. Edit this at middleware/validateReq.js folder')
    next()
}