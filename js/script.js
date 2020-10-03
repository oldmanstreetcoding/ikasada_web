/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */

$(document).ready(() => {
    // start load menu
    $.get('../pages/component/nav.html', (data) => {
        $('.topnav, .sidenav').html(data);
    });

    $('.sidenav').sidenav();

    // end load menu

    // start load detil profil
    const loadprofil = (detil) => {
        $.get(`../pages/profil/${detil}.html`, (data, status) => {
            if (status === 'success') {
                $('#boxprofil').html(data);
            }
        });
    };

    $(document).on('click', '.tabprofil', function () {
        const detil = $(this).attr('id');
        loadprofil(detil);
    });

    // end load detil profil

    // start load page
    const loadpage = (page) => {
        $.get(`../pages/${page}.html`, (data, status) => {
            if (status === 'success') {
                $('#body-content').html(data);

                if (page === 'beranda') {
                    const h = window.innerHeight;

                    $('.slider').slider({
                        indicators: false,
                        height: h - 118,
                    });
                }

                if (page === 'profil') {
                    loadprofil('sambutan');
                }
            }
        });
    };

    $(document).on('click', '.btn-nav', function () {
        $('.btn-nav').css('text-decoration', 'none');

        const page = $(this).attr('id');
        $(`#${page}`).css('text-decoration', 'underline');

        loadpage(page);
    });

    loadpage('beranda');

    // end load page

    // start load form login
    $(document).on('click', '#showlogin', () => {
        $.get('../pages/component/boxlogin.html', (data) => {
            $('#boxlogin').html(data);
        });
    });

    $('.modal').modal();

    // end load form login
});
