//The following is being required so that it can be watched by webpack and therefore reload page on updates.
if (process.env.NODE_ENV !== 'production') {
    require('./index.html')
}