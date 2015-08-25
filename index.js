/*
 * (C) 2015 Seth Lakowske
 */

function slurp(stream, max_amount, onEnd, onError) {

    var content = '';

    stream.on('data', function(data) {
        content += data;

        if (content.length > max_amount) {
            if (onError) {
                onError('max amount exceeded', max_amount, content);
            } else {
                onEnd(content);
            }
        }
        
    })

    stream.on('end', function() {
        onEnd(content);
    });
    
}
