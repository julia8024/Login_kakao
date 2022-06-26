function kakaoLogin() {
    Kakao.Auth.login({
        scope: 'profile_nickname',
        success: function(response) {
            console.log(response)
            Kakao.API.request({
                url: '/v2/user/me',
                success: (res) => {
                    const kakao_account = res.kakao_account;
                    console.log(kakao_account)
                    Kakao.Auth.setAccessToken(ACCESS_TOKEN);
                }
            });
            window.location.href='/Login_kakao/main.html';
        },
        fail: function(error) {
            console.log(error);
        }
    });
}

function kakaoLogout() {
    if (Kakao.Auth.getAccessToken()) {
        Kakao.API.request({
            url: '/v1/user/unlink',
            success: function (response) {
                console.log(response)
            },
            fail: function (error) {
                console.log(error)
            },
        })
        Kakao.Auth.setAccessToken(undefined)
        window.location.href='/Login_kakao/main.html';
    }
}