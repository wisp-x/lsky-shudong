/**
 * Created by WispX on 2017/10/26.
 */
$(function() {
    $('.content').load('', {'action': 'index'}, callback);
    var menu = $('.menu a');
    menu.click(function(e) {
        e.preventDefault();
        var obj = eval('(' + $(this).attr('data-json') + ')');
        $('.content').load($(this).attr('href'), obj, callback);
        menu.each(function() {
            $(this).removeClass('active');
        });
        $(this).addClass('active');
    });
    function callback() {
        $('.article').click(function () {
            var inst = new mdui.Dialog('.mdui-dialog');
            $('.mdui-dialog-content span').html($(this).find('.lk-panel-body').html());
            $('.mdui-dialog-content .dialog-footer').html($(this).find('.lk-panel-foot').html());
            inst.open();
        });
    }
});
function msg(message, callback) {
    return mdui.snackbar({
        message: message,
        position: 'right-top',
        onClose: callback ? callback : function() {

        },
    });
}