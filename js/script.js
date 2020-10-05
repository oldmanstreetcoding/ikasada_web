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
            } else {
                $('#boxprofil').html('Data Tidak Ditemukan !');
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
            } else {
                $('#body-content').html('Halaman Tidak Ditemukan !');
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
    $(document).on('click', '.showlogin', () => {
        $.get('../pages/component/boxlogin.html', (data) => {
            $('#boxlogin').html(data);
        });
    });

    $('.modal').modal();
    // end load form login

    // start script untuk membuat tombol go to the top
    mybutton = document.getElementById('goTop');

    const scrollFunction = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = 'block';
        } else {
            mybutton.style.display = 'none';
        }
    };

    window.onscroll = function () {
        scrollFunction();
    };

    $(document).on('click', '#goTop', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
    // end script untuk membuat tombol go to the top

    // navigasi tab menu di halaman profil
    $('.tabs').tabs();

    // floating button
    $('.fixed-action-btn').floatingActionButton({
        direction: 'left',
    });
});
