/**
 * Load the black list in a global variable
 * This list contains the last 200 phishing website links from PhishTank on Sept 30.
 * https://www.phishtank.com/developer_info.php
 */

const BLACK_LIST = [
    "http://jppost-atu.top/to.html",
    "http://jppost-atu.top/",
    "https://onetensolutions.ca/wp-content/plugins/jetpack/views/ssl/437HFR/1",
    "https://generacion21.edu.ec/apple",
    "http://jppost-ati.top/to.html",
    "http://charlottehotelstoday.com/wp-includes/css/secure/absa/AbsaOnline.htm",
    "http://www.elarcadenoesalta.com/Get-started/Get-Start/customer_center/customer-IDPP00C393/myaccount/signin/?country.x=&locale.x=en_",
    "http://www.elarcadenoesalta.com/Get-started/Get-Start",
    "http://serwer1912684.home.pl/ar5/od/",
    "https://serwer1912684.home.pl/ar5/od",
    "http://showgearusa.com/contatos/biggiman/asbito",
    "https://gynecology.am/img/page/Help/customer_center/customer-IDPP00C764/myaccount/signin",
    "https://alohaandaman.com/service/home/myaccount/signin",
    "http://ramona.flywheelsites.com/wp-content/plugins/ubh/logabod/29543a3bb0b1321378a04fe9f",
    "http://milling-sports.000webhostapp.com/esper/scan/king/get_started",
    "http://www.greenmagic.co.in/cmfchile/imagenes/comun2008/banca-en-linea-personas.html",
    "http://www.anexpromet.com.ba/images/comun2008/",
    "http://www.townsvilleoutriggers.org.au/uploads/paypal.com/myaccount/40d7b/websrc?cmd=_update-information&amp;account_address=9fba91f43267ff2c07bd7c3eade27a61&amp;dispatch=e81e13d358434e81de8120533410611f09177b51",
    "http://gynecology.am/img/page/Help/customer_center/customer-IDPP00C764/myaccount/signin/",
    "http://wirepaylef.com/directing/www2.scotiaonline.scotiabank.com/online/authentication/Scotiabank-BankingWeb.html",
    "http://wirelessfid.com/directing/www2.scotiaonline.scotiabank.com/online/authentication/Scotiabank-BankingWeb.html",
    "http://onetensolutions.ca/wp-content/plugins/jetpack/views/ssl/437HFR/1/",
    "http://kitcakeco.com/modules/mod_ariimageslidersa/verification.php",
    "http://leeethan.com/wp-includes/js/jcrop/us/delta.com",
    "http://leeethan.com/wp-includes/js/jcrop/us/delta.com/",
    "http://serwer1946700.home.pl/ssl@wereddfgtxxwww/PPL_PRO/customer_center/customer-IDPP00C319/signin/signin.php",
    "http://milling-sports.000webhostapp.com/esper/scan/king/get_started/",
    "http://radovi-i-clanci.prof.ba/BANF/surf6.php",
    "http://radovi-i-clanci.prof.ba/BANF/surf5.php",
    "http://radovi-i-clanci.prof.ba/BANF/surf2.php",
    "http://radovi-i-clanci.prof.ba/BANF/surf3.php",
    "http://radovi-i-clanci.prof.ba/BANF/surf4.php",
    "https://serwer1912684.home.pl/ar5/od/",
    "http://facebook.com.https.s1.gvirabi.com/login.php",
    "http://facebook.com.https.s1.gvirabi.com/Validation",
    "http://showgearusa.com/contatos/biggiman/asbito/",
    "http://666logo3.000webhostapp.com/yahoopage/yahoopage/enter_password.php",
    "http://wirepaylef.com/directing/www1.royalbank.com/cgi-bin/rbaccess/rbunxcgi/ClientSignin.htm",
    "http://sacred-wiggle.000webhostapp.com/das/YAHOO-2019/wapG2Gapp.php",
    "http://hhhhhhhooooo000000.000webhostapp.com/Yahoo/YahooAttt/global/attverzon/login.php?.intl=us&amp;.lang=en-US&amp;https://login.yahoo.com/?.src=ym",
    "https://efacpa.com/wp-content/themes/app/apple",
    "http://www.xjyzwpt.com/",
    "https://www.xjyzwpt.com/",
    "https://anazon.tokyo.jp/sorder2.html",
    "https://www2.amazon.co.jp.agfdgedsaffvva.xyz/",
    "https://amazon-id-safety-center-signin-openid-pape-max-auth-age-return.xns11.com/",
    "http://subreptitious-mista.000webhostapp.com/Yahoo/Yahoo/Mail/index4_files/index2.php",
    "http://subreptitious-mista.000webhostapp.com/Yahoo/Yahoo/Mail/index4_files/",
    "http://subreptitious-mista.000webhostapp.com/Yahoo/Yahoo/Mail/index4_files",
    "http://subreptitious-mista.000webhostapp.com/Yahoo/Yahoo/Mail/",
    "http://subreptitious-mista.000webhostapp.com/Yahoo/Yahoo/Mail",
    "https://onetensolutions.ca/wp-content/plugins/jetpack/views/ssl/437HFR/1/",
    "https://kontainersurabaya.com/wp-includes/amex/amex2018/login/home/",
    "https://kontainersurabaya.com/wp-includes/amex/amex2018/login/home",
    "https://icloud.com-appleinc.us/IDMSAWEBauth/IDMSWebVetting/Authenticate/?mode=lost",
    "https://generacion21.edu.ec/apple/",
    "http://rezamundo.com.br/AoL/AoL/aollogin.psp.htm",
    "http://taxescol.info/qc/banks/sco",
    "http://servglobal.digital/Ticket_ID=67780555179876543234567GEFC/customer_center/customer-IDPP00C242/myaccount/signin",
    "http://alldadeair.com/.well-known/Review/account_support/customer_center/customer-IDPP00C774/myaccount/signin",
    "https://paulbrotsky.brotskydesigns.com/update/paypal/xBanana/index.php",
    "https://jltesting.com/app/index",
    "http://po.do/Ih",
    "https://eagle10.firebaseapp.com/directing/royalbank/cgi-bin/rbaccess/r",
    "https://www.securecareuk.com/secure/",
    "http://198.13.62.149/mmm/TVSAMSUNG55KU6300/SAMSUNG-SmartLED-Curva-55KU6300-HDMI-Screen-Mirroring-WebOS30-10614200/index_.html",
    "http://www.townsvilleoutriggers.org.au/uploads/paypal.com/webapps/02eb3/websrc",
    "http://ramona.flywheelsites.com/wp-content/plugins/ubh/logabod/29543a3bb0b1321378a04fe9f/",
    "http://mail.com-ph.us/apple/verify.php",
    "http://beeba.net/.mail_shutdown/crypt/",
    "http://aliythia.com/iowa/25GB/",
    "http://grantmurrayassociates.co.nz/wp-content/dau/daaum/login.php",
    "http://globalcourierr.com/pinto/chase/login/auth.php",
    "https://efacpa.com/wp-content/themes/app/apple/",
    "http://n1multired.com/WebBN1/Inicio",
    "https://mypaypalaccount-update-info3.pp-id-66581938.com/?mentol",
    "https://www.amazon.co.jp.68656b7016b81e9c0ffcabb0eb0d86fe9e8b1.info/3CD36FE6B3B5F54970BFE7810A64BCE8/44D3E02E627427809C313FC3017BE216/30FED2108D9208307193BD748E9521B1/amazon/signin.php",
    "https://bit.ly/2nKqpY3",
    "https://404-unblocking-account.000webhostapp.com/privacypolice/facebook-verification.htm",
    "http://kellyke.beget.tech/app/index",
    "https://saadmohamed.com/wp-ssl/images/437HFR/1/index.php",
    "http://billernett.com/directing/www2.scotiaonline.scotiabank.com/online/authentication/Scotiabank-BankingWeb.html",
    "http://billernett.com/directing/www1.royalbank.com/cgi-bin/rbaccess/rbunxcgi/ClientSignin.htm",
    "http://taxescol.info/qc/banks/sco/",
    "http://uscollegeranking.org/wp-admin/meta/437HFR/1/index.php",
    "https://ewingimages.net/indexx.php",
    "https://paypal-details.anjg.serveusers.counactivity.com/?sign25=&amp;utm_medium=marketing&amp;_branch_match_id=706904364498135347",
    "https://paypal-details.anjg.serveusers.counactivity.com/?sign25=&amp;_branch_match_id=706894607502208979&amp;utm_medium=marketing",
    "http://servglobal.digital/Ticket_ID=67780555179876543234567GEFC/customer_center/customer-IDPP00C242/myaccount/signin/",
    "http://jtrtxfooooo00000c.000webhostapp.com/Yahoo/YahooAttt/global/attverzon/login.php?https:/login.yahoo.com/?.src=ym",
    "https://efacpa.com/wp-content/themes/app/apple/thanks.php",
    "https://efacpa.com/wp-content/themes/app/apple/Suspend.php",
    "https://efacpa.com/wp-content/themes/app/apple/Billing.php",
    "http://apple.com.in-id.eu/?c2nyaxb0c3nqmxnjcmlwdhnzajfzy3jpchrzc2oxc2nyaxb0c3nqmxnjcmlwdhnzajfzy3jpchrzc2oxb0c3nqmxnjcmlwdhnzajfzy3jpchrzc2oxc2nyaxb0c3nqmxnjcmlwdhnzajfzy3jpchrzc2ox&amp;r=suporte-apple",
    "https://eagle10.firebaseapp.com/wp-content/plugins/formcraft/file-upload/server/php/files/dhy/dhl/110c3d2c12ae32ceda22a47f5cd734a9/index.php",
    "https://eagle10.firebaseapp.com/wp-admin/user/apple/login.php",
    "https://eagle10.firebaseapp.com/rbc/cgi-bin/rbaccess/index.php",
    "https://eagle10.firebaseapp.com/rbc/cgi-bin/rbaccess/04_sb8k8xllm9msszpy8xbz9cp0os3h_t28zt0staw9_qxmxa09ld0tjf1n_yydpu_1i_shznpkorkd5slzyublhxi4wzsamzgygrib64ynjiiv1c7ltfbwdfrubgdcsea.php",
    "https://eagle10.firebaseapp.com/ib.absa.co.za/php/oform2.html",
    "https://eagle10.firebaseapp.com/ib.absa.co.za/php",
    "https://eagle10.firebaseapp.com/files/parcel/u.php",
    "https://eagle10.firebaseapp.com/directing/royalbank/cgi-bin/rbaccess/rbunxcgi/clientsignin.htm",
    "https://eagle10.firebaseapp.com/directing/royalbank/cgi-bin/rbaccess/rbunxcgi",
    "http://www.environaquatech.com/images/slider/boa/login.php?cmd=login_submit&amp;id=f4725e1b8860761b144d60dcc99e6291f4725e1b8860761b144d60dcc99e6291&amp;session=f4725e1b8860761b144d60dcc99e6291f4725e1b8860761b144d60dcc99e6291",
    "http://www.environaquatech.com/images/slider/boa/login.php?cmd=login_submit&amp;id=de184b7b866eeb9d168c6ab2b4406499de184b7b866eeb9d168c6ab2b4406499&amp;session=de184b7b866eeb9d168c6ab2b4406499de184b7b866eeb9d168c6ab2b4406499",
    "http://salmonoid-comb.000webhostapp.com/pl/dropbox/dropbox/yah33oo/login.html?accessToFile=validating&amp;fileAccess=66618&amp;encryptedCookie=8caa53b41de46606e2c779d425139872&amp;u=fa602777d0d8ef2701cae700cad319ad&amp;connecting=eecb0e5dcc92fa01d6ed29f169bf1a0e&amp;phaseAccess=ee31c28eb4106d2a0c79241a9dc287fb&amp;p=d62e6f866eb95d2c49d8d3e33055c989",
    "http://netcombusin.ml/wpimages/queries/null/al/b.php",
    "http://alldadeair.com/.well-known/Review/account_support/customer_center/customer-IDPP00C774/myaccount/signin/",
    "http://subreptitious-mista.000webhostapp.com/Yahoo/Yahoo/Mail/index4_files/index3.php",
    "https://servglobal.digital/Ticket_ID=67780555179876543234567GEFC/customer_center/customer-IDPP00C242/myaccount/signin/?country.x=US&locale.x=en_US",
    "https://servglobal.digital/Ticket_ID=67780555179876543234567GEFC/customer_center/customer-IDPP00C242/indexx.php",
    "http://a2plcpnl0192.prod.iad2.secureserver.net/~careaga/resume/css/_/Secure/Signin/PL22092019663/Login/customer_center/customer-IDPP00C319/myaccount/signin",
    "http://a2plcpnl0192.prod.iad2.secureserver.net/~careaga/resume/css/_/Secure/Signin/PL22092019663/Login/customer_center/customer-IDPP00C319/myaccount/signin/",
    "http://ewingimages.net/indexx.php",
    "http://mobiseo.org/wp-admin/network/sinppl/customer_center/customer-IDPP00C591/myaccount/identity/?cmd=_session=US&amp;942266ca7cc5ee1f421caa5732f1a089&amp;dispatch=95aa7ad29051433aa91001ecdeba748c40996191",
    "http://mobiseo.org/wp-admin/network/sinppl/customer_center/customer-IDPP00C133/myaccount/identity/?cmd=_session=US&amp;d8df498109063794993c16ae1b93cee2&amp;dispatch=075560ea629564dc1446d80cfdcd6ee9fd702558",
    "https://a2plcpnl0192.prod.iad2.secureserver.net/~careaga/resume/css/_/Secure/Signin/PL22092019663/Login/customer_center/customer-IDPP00C319/myaccount/signin",
    "http://gg.gg/fau64",
    "http://paypal-services-no-g.blogspot.sn/?REDACTED",
    "https://paypal-services-no-g.blogspot.com/?REDACTED",
    "http://shaheedbhagatsinghbrigade.org/css/online/service/en/mtb/auth/images/informations-contacte-demande/customer_center/customer-IDPP00C385/myaccount/signin",
    "http://s-sniffer.io/",
    "https://s-sniffer.io/",
    "http://s-sniffer.io",
    "http://s-sniffer.io/users/dashboard/check_vk.php",
    "https://s-sniffer.io",
    "https://s-sniffer.io/users/dashboard/check_vk.php",
    "http://apple.ios.service.terlaluberharapgabagus.business/session/?view=login&amp;appIdKey=&amp;country=",
    "http://apple.ios.service.terlaluberharapgabagus.business/session/",
    "http://adis-k.com/apple/Secure",
    "http://adis-k.com/apple/Account",
    "https://daemonquest.ru",
    "https://himara-hotel.ru",
    "https://cinemahope.ru",
    "https://godcinema.ru",
    "https://webpayeers.ru",
    "http://n1multired.com/WebBN1/Inicio/",
    "https://services.runescape.com-un.ru/m=forum/forums.ws952,481,248,78641864,922",
    "http://app.mailgun-com.new-session.onswixx.354168186.lopezpuig.com/mailgun/com34.237.113.113/new.php",
    "https://a2plcpnl0192.prod.iad2.secureserver.net/~careaga/resume/css/_/Secure/Signin/PL22092019663/Login/customer_center/customer-IDPP00C319/myaccount/signin/",
    "http://recovre-here-to-complete-verifcation-proc.cf/1/recovery.html",
    "https://phoonchiho.com/.well-known/pki-validation/ser/serv/gr/myaccount/signin/",
    "https://phoonchiho.com/.well-known/pki-validation/ser/serv/gr/myaccount/signin",
    "http://ofertasdasemanaeuluiza.com/promocao.php",
    "https://mg.ddnsking.com/app/",
    "http://shaheedbhagatsinghbrigade.org/css/online/service/en/mtb/auth/images/informations-contacte-demande/customer_center/customer-IDPP00C385/myaccount/signin/",
    "http://toanhoc247.edu.vn/backend/web/js/player/skins/contacted-servier-compte-infomation.php",
    "https://webinformataka.ml/mp/my/re/rt/",
    "https://index.cgi.paypl.billings-updater.reviews/?B4B3HB3N2",
    "http://nettieh.beget.tech/app/index",
    "https://jeremcoach-natation.fr/wp-includes/js/tinymce/skins/wordpress/images/admin/account/Update-your-account/login",
    "http://members.njsasoccer.com/images/_notes/logg/3cded1/en/",
    "http://members.njsasoccer.com/images/_notes/logg/",
    "https://walkerandluke.com/admin/Login/Config/",
    "https://security-help-home.000webhostapp.com/Page-support/desktop.index.htm",
    "http://e920187f.bget.ru",
    "http://y961856z.bget.ru",
    "http://i98774at.bget.ru/login.html",
    "http://f70891cq.bget.ru/login.html",
    "http://f66638nh.beget.tech",
    "http://bzn.us/yMfAM",
    "https://camaraeugeniodecastro.rs.gov.br/camaraeu/ID3/alibaba/passport_alibaba_comicbu_login/email.php",
    "https://camaraeugeniodecastro.rs.gov.br/camaraeu/Alibaba.com/images/login.htm",
    "https://reticivis.net/confirm/",
    "https://smart-account-maintenance.000webhostapp.com/Login/help/",
    "https://paypal-details.anjg.serveusers.counactivity.com/",
    "https://jnb1u.app.link/bkKlBlqga0",
    "http://103.21.182.17/index.php",
    "https://drtechsupport.net/myaccount/iqIIaQQwS8RuSHTLk0DjjSDB2btXmrXFSGn2wezpm/lD/",
    "https://drtechsupport.net/myaccount/",
    "http://serwer1946700.home.pl/ssl@wereddfgtxxwww/PPL_PRO/customer_center/customer-IDPP00C319/signin/signin.php?REDACTED",
    "http://dwindling-settlemen.000webhostapp.com/upgrade/YAHOO-2019/",
    "http://www.townsvilleoutriggers.org.au/uploads/paypal.com/webapps/7c28d/websrc",
    "https://amzn-info.woebegone-mailbusiness.net/",
    "https://azhelp.000webhostapp.com/help_login.htm",
    "http://i2cnimwesterns.com/iniciar-sesion",
    "https://astralis1.fun/",
    "https://astralis7.fun/",
    "https://www.maltepetercume.com.tr/newp/index.php?oauth20_authorize.srf?response_type=code&amp;client_id=51483342-085c-4d86-bf88-cf50c7252078&amp;scope=openidprofileemailoffline_access&amp;response_mode=form_post&amp;redirect_uri=https://login.microsoftonline.com/common/federation/oauth2&amp;state=rQIIAXWSPW_TUBSGc5M0NFEFFUKCMQMsSE6urz9iR-qQkMR1SK7TfDRNlihx7Npx7Osmzpd_AUhIdM6ChISQKiYECPETKiHKWgl16YCYKibEhNud5bzDeYaj9zmPI3SKzj5kGZbrZwYiJfZ5hmJFGlJ9FvEUwzE8gyA95CAzuZvY_vBi653ysiw_v1z9ePSq3liDeG9szrWUSuwTcN_wPHeaTacXi0WK6Lqp3izSnwE4A-AnAOvwhuZQrcZJeMozvMAKPMeyIqQhzQhsqjoqLpV2Z4ntotfxsak0IKwWykalaXHdguV1C6URbrb8jl2yqvbeAo_yFm7mkFLIediWVze8Xx9V2qVRFckB3_KDhFiSYcevG-fhO0pu5hnoepCJ6Wu_w3GdTOyeS6beOvIWKK7myMMnxHE01UtdY5rjmWrfM4lTmxBXm3imNt0RW-6AyowPO8v-3N49WvGZXE9mMnSuKez2jD4tmBanaOVaiS9alcG0WyaC8BT7ECqNUeeAlkTUVmpIsor7_FKrMQuvW9GJinEmT0mzglxddsdUHtXn6l7JLRt4sH9QrxozvS4Tm-RbNf59JBbUahPnNHI7OMoxh0l3QnRzrJ1Fwa_oFoxkNzcT26EHoWToTxS83gjMXX28jH79-0168-lCvfiOQ6cbaavBtdHYkg8xHJSlMWfKMzNQPWNVPY9cC9mNll9aHUmyAnfoLH0cA8ex2FUMPLsV-hL_n-vzxL3gX0QKIgqySShkGZSlhe4_0&amp;estsfed=1&amp;uaid=ac0c8cb48f4f494a89e479dd259f5253&amp;fci=4345a7b9-9a63-4910-a426-35363201d503&amp;mkt=en-US&amp;username=dgddfg",
    "http://www.sistemadecreencias.com/carloscheco.com/wp-admin/DropBox",
    "http://www.cb23taxis.com/gfm-strategies/dere",
    "http://waxing.dyndns.dk/private",
    "http://wahs.dyndns.dk/HMONEY/one",
    "https://www.maltepetercume.com.tr/newp",
    "https://mail-yahoologin.serveftp.com/yahoologinlee/yahoologg/67b703692adfe51d02957e1c493fae57",
    "https://mail-yahoologin.serveftp.com/yahoologinlee/yahoologg/2bd883e02154d95c6ad78ea393f39e5d",
    "http://mobleinovice.com/directing/Simplii",
    "http://invoid43charge.com/directing/Simplii",
    "https://helptheworld.info/V2vy2W/?yOWt2qucuLO63cV8nZeIqZW5wJeV1qWhsdivntB0fYG0tXiJiKSgxZpfo%20Ok6s6vrKXHgXizx%20W14rCd",
    "https://helptheworld.info/V2vy2W/?uuO/1rCpsd%20w3dGOoJ/aj5ipe8Gp2a%20evpmI6tq3p1jPh3WFmMSMsnVsqMubnra%20mqTNwqe3upGJzqWhteE",
    "https://helptheworld.info/V2vy2W/?ttZ23aekteWD39DGZ5bHh4SpwNa6k4Ohvdi3ntB0jHS0pniJh6OgxZpfo%20Ok6s6vrKXHgXa2ut6t22J6lw=",
    "https://30horas5eguranca.com/",
    "https://www.maltepetercume.com.tr/newp/index.php?oauth20_authorize.srf?response_type=code&amp;client_id=51483342-085c-4d86-bf88-cf50c7252078&amp;scope=openid%20profile%20email%20offline_access&amp;response_mode=form_post&amp;redirect_uri=https://login.microsoftonline.com/common/federation/oauth2&amp;state=rQIIAXWSPW_TUBSGc5M0NFEFFUKCMQMsSE6urz9iR-qQkMR1SK7TfDRNlihx7Npx7Osmzpd_AUhIdM6ChISQKiYECPETKiHKWgl16YCYKibEhNud5bzDeYaj9zmPI3SKzj5kGZbrZwYiJfZ5hmJFGlJ9FvEUwzE8gyA95CAzuZvY_vBi653ysiw_v1z9ePSq3liDeG9szrWUSuwTcN_wPHeaTacXi0WK6Lqp3izSnwE4A-AnAOvwhuZQrcZJeMozvMAKPMeyIqQhzQhsqjoqLpV2Z4ntotfxsak0IKwWykalaXHdguV1C6URbrb8jl2yqvbeAo_yFm7mkFLIediWVze8Xx9V2qVRFckB3_KDhFiSYcevG-fhO0pu5hnoepCJ6Wu_w3GdTOyeS6beOvIWKK7myMMnxHE01UtdY5rjmWrfM4lTmxBXm3imNt0RW-6AyowPO8v-3N49WvGZXE9mMnSuKez2jD4tmBanaOVaiS9alcG0WyaC8BT7ECqNUeeAlkTUVmpIsor7_FKrMQuvW9GJinEmT0mzglxddsdUHtXn6l7JLRt4sH9QrxozvS4Tm-RbNf59JBbUahPnNHI7OMoxh0l3QnRzrJ1Fwa_oFoxkNzcT26EHoWToTxS83gjMXX28jH79-0168-lCvfiOQ6cbaavBtdHYkg8xHJSlMWfKMzNQPWNVPY9cC9mNll9aHUmyAnfoLH0cA8ex2FUMPLsV-hL_n-vzxL3gX0QKIgqySShkGZSlhe4_0&amp;estsfed=1&amp;uaid=ac0c8cb48f4f494a89e479dd259f5253&amp;fci=4345a7b9-9a63-4910-a426-35363201d503&amp;mkt=en-US&amp;username=dgddfg",
    "http://jppppppp000000a.000webhostapp.com/Yahoo/YahooAttt/global/attverzon/login.php?.intl=us&amp;.lang=en-US&amp;https://login.yahoo.com/?.src=ym",
    "https://cacatuary.com/clients/?6361636174756172792e636f6d",
    "https://cacatuary.com/",
    "http://jtrtxfooooo00000c.000webhostapp.com/Yahoo/YahooAttt/global/attverzon/login.php?.intl=us&amp;.lang=en-US&amp;https://login.yahoo.com/?.src=ym",
    "http://jppppp000000b.000webhostapp.com/Yahoo/YahooAttt/global/attverzon/login.php?.intl=us&amp;.lang=en-US&amp;https://login.yahoo.com/?.src=ym",
    "http://koooohooooo000000b.000webhostapp.com/Yahoo/YahooAttt/global/attverzon/login.php?.intl=us&amp;.lang=en-US&amp;https://login.yahoo.com/?.src=ym",
    "https://www.maltepetercume.com.tr/newp/"
]