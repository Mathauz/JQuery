$(document).ready(function(){
    $(`header button`).click(function() {
        $(`form`).slideDown();
    })

    $(`#can`).click(function() {
        $(`form`).slideUp()
    })

    $(`form`).on(`submit`, function(e) {
        e.preventDefault();
        const endm = $(`#end`).val();
        const nvi = $(`<li style="display: none"></li>`);
        $(`<img src="${endm}" />`).appendTo(nvi);
        $(`<div> class="over">
            <a href= "${endm}" target="_blank" title="Ver imagem em tamanho real">
            ver imagem em tamanho real
            </a>
            </div>`).appendTo(nvi);
            $(nvi).appendTo(`ul`);
            $(nvi).fadeIn(1000);
            $(`#end`).val(``)
    })

})
