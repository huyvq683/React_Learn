

function logger(log, type = 'log'){
    console[type](log);
}

export default logger;

logger('Làm cho cẩn thận....!!!', 'warn');
logger('Lỗi tùm lum rồi kìa bro......', 'error');