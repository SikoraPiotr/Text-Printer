window.onload = function () {
    var text = document.getElementById('text');
    var greeting = [
        'kbuild-dir := $(if $(filter /%,',
        '     EXPERIMENTAL INSTRUMENTS     ',
        '$(kbuild-dir)/Kbuild, $(kbuild-dir)',
        '     ANALOG VISUALS     ',
        '$(patsubst %/,%,$(filter %/, $(obj-y)))',
        '      KINETIC SENSORS    ',
        'if $(KBUILD_EXTMOD),$(ext-mod-dir)',
        '     MODULAR ROOM  ',
        ' $(shell grep -h \.ko$$ /dev/null',
        '     VOICE CONTROLED SYNTHS     ',
        '$(patsubst %/,%,$(filter %/, $(obj-y)))',
        '     AMBIENT SESSION      ',
        'if $(KBUILD_EXTMOD),$(ext-mod-dir)',
        '     EDM   ',
        '$(kbuild-dir)/Kbuild, $(kbuild-dir)',
        '     CREATIVE CODING  ',
        'if $(KBUILD_EXTMOD),$(ext-mod-dir)',
        '     GENERATIVE MUSIC    ',
        '$(patsubst %/,%,$(filter %/, $(obj-y)))',
        '    360 LIVE STREAM   ',
        'kbuild-dir := $(if $(filter /%,',
        '     DISCUSSION BOARD   ',
        '$(kbuild-dir)/Kbuild, $(kbuild-dir)',
        '   ARTIST 1   ',
        '$(kbuild-dir)/Kbuild, $(kbuild-dir)',
        '   ARTIST 2   ',
        '$(patsubst %/,%,$(filter %/',
        '   ARTIST 3   ',
        'if $(KBUILD_EXTMOD),$(ext-mod-dir)',
        '   ARTIST 4   ',
        ' $(shell grep -h \.ko$$',
        '   ARTIST 5   ',
        'if $(KBUILD_EXTMOD),$(ext-mod-dir)',
        '   ARTIST 6   ',
        '$(patsubst %/,%,$(filter %/, $(obj-y)))',
        '   ARTIST 7   ',
        'kbuild-dir$(filter /%,',
        '   ARTIST 8   ',
        'ext-mod-dir = $(INSTALL_MOD_DIR)',
        '   ARTIST 9   ',
        'if $(KBUILD_EXTMOD)',
        '   ARTIST 10   ',
        'ext-mod-dir = $(INSTALL_MOD_DIR)',
        '$(INSTALL_MOD_DIR)',
        'ext-moLL_ILD_E',
    ];
    text.innerHTML = '<i>▮</i>';

    (function greet() {
        if (greeting.length > 0 && greeting.length < 3) {
            text.insertBefore(document.createElement(' '), text.lastChild);
        }

        var line = greeting.shift();
        if (!line) {
            return;
        }

        line = line.split('');
        (function type() {
            var character = line.shift();
            if (!character) {
                return setTimeout(greet, 100);
            }

            text.insertBefore(document.createTextNode(character), text.lastChild);
            setTimeout(type, 20);
        }());
    }());
}