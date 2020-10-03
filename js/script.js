/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */

$(document).ready(() => {
    $.get('../pages/component/nav.html', (data) => {
        $('.topnav, .sidenav').html(data);
    });

    $('.sidenav').sidenav();

    const loadpage = (page) => {
        $.get(`../pages/${page}.html`, (data, status) => {
            if (status === 'success') {
                $('#body-content').html(data);

                const h = window.innerHeight;

                $('.slider').slider({
                    indicators: false,
                    height: h - 118,
                });
            }
        });
    };

    loadpage('beranda');

    $(document).on('click', '.btn-nav', function () {
        $('.btn-nav').css('text-decoration', 'none');

        const page = $(this).attr('id');
        $(`#${page}`).css('text-decoration', 'underline');

        loadpage(page);
    });

    $(document).on('click', '#showlogin', () => {
        $.get('../pages/component/boxlogin.html', (data) => {
            $('#boxlogin').html(data);
        });
    });

    $('.modal').modal();
});
