export default {
  "library": {
    "workspaces": [{"viewLeft":-1692.0893497882207,"viewTop":-1865.2053825623516,"scale":1.6275236637574133,"workspace":"<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"dV3G)Qt+3U+EO+9h^VpV\">Dream URL</variable><variable id=\"BJs#z}x2#T,+bHdeu=~T\">API</variable><variable id=\"ZDCf/54/EcVmSN|qrI](\">Dream data</variable><variable id=\"kK%y)Kx{S}/Xg!!+@lGv\">API - Google Colab</variable><variable id=\"CZ3v^)fgWN%SUyC5,7kl\">Stop URL</variable></variables><block type=\"on_start\" id=\"_Vwz==U,1_uA)K5Z_fp|\" x=\"-1150\" y=\"-1150\"><statement name=\"POST_DATA\"><block type=\"procedures_callnoreturn\" id=\"n0m|qyE*5xZpF;xJNYt}\"><mutation name=\"Start new dream loop\"><arg name=\"Dream URL\"></arg><arg name=\"API\"></arg><arg name=\"Dream data\"></arg></mutation><value name=\"ARG0\"><block type=\"text\" id=\"Rmn-lzvPZv]HVtG0351Q\"><field name=\"TEXT\">http://server1/api/predict</field></block></value><value name=\"ARG1\"><block type=\"variables_get\" id=\"Z*mR+oQ[;X@r^7[[(gvj\"><field name=\"VAR\" id=\"kK%y)Kx{S}/Xg!!+@lGv\">API - Google Colab</field></block></value><value name=\"ARG2\"><block type=\"json_object\" id=\"mJ1i9%X*8H_3/t(PlNKB\"><statement name=\"STATEMENTS\"><block type=\"json_object_key_value\" id=\"r(Wqau+xb0ex0NT6vyVw\"><value name=\"KEY\"><block type=\"text\" id=\"3aQn``b{X=+*@p62B+JS\"><field name=\"TEXT\">prompt</field></block></value><value name=\"VALUE\"><block type=\"text\" id=\"{R9ma|)-Fv%vcz+_(=mo\"><field name=\"TEXT\">Steampunk hot air balloons floating above the clouds</field></block></value><next><block type=\"json_object_key_value\" id=\",|`L82GLspPWq7T2.rdA\"><value name=\"KEY\"><block type=\"text\" id=\"`Z7?Lw)e9Z*p/BSZbmK,\"><field name=\"TEXT\">width</field></block></value><value name=\"VALUE\"><block type=\"math_number\" id=\"%C4S`Npb3XD32-gMZcE,\"><field name=\"NUM\">512</field></block></value><next><block type=\"json_object_key_value\" id=\"d|IRM:ac^+F@Pyj:0zTL\"><value name=\"KEY\"><block type=\"text\" id=\"=B6m}:qZ[nUDN*U,Y8[E\"><field name=\"TEXT\">height</field></block></value><value name=\"VALUE\"><block type=\"math_number\" id=\"wbPR`}:eZ5-P3kv@6*p0\"><field name=\"NUM\">512</field></block></value></block></next></block></next></block></statement></block></value><next><block type=\"procedures_callnoreturn\" id=\"#0W1Vp!+~=A0GTh+%jo7\" disabled=\"true\"><mutation name=\"Start new dream loop\"><arg name=\"Dream URL\"></arg><arg name=\"API\"></arg><arg name=\"Dream data\"></arg></mutation><value name=\"ARG0\"><block type=\"text\" id=\"Hxh=unc9Akn+Ho}6bw-*\"><field name=\"TEXT\">http://server2/api/predict</field></block></value><value name=\"ARG1\"><block type=\"variables_get\" id=\"@F9L.Wz`wB`U:H7EL%fs\"><field name=\"VAR\" id=\"kK%y)Kx{S}/Xg!!+@lGv\">API - Google Colab</field></block></value><value name=\"ARG2\"><block type=\"json_object\" id=\"BXO+PauKHFxIbhErRg1-\"><statement name=\"STATEMENTS\"><block type=\"json_object_key_value\" id=\"gwm#xrT6{4g,A!5ZH;%X\"><value name=\"KEY\"><block type=\"text\" id=\"/pY[j3`p4w9hB9rwjQ)L\"><field name=\"TEXT\">prompt</field></block></value><value name=\"VALUE\"><block type=\"text\" id=\")@;5RpnBr1`n,NFaj_q=\"><field name=\"TEXT\">An astronaut taking a selfie</field></block></value><next><block type=\"json_object_key_value\" id=\"t?Ci-?=9~NAU[N%3Llx#\"><value name=\"KEY\"><block type=\"text\" id=\"GzpYk{CV/6JF}]XCBL+:\"><field name=\"TEXT\">width</field></block></value><value name=\"VALUE\"><block type=\"math_number\" id=\"89Es7z/-WJlJURTz]RR7\"><field name=\"NUM\">512</field></block></value><next><block type=\"json_object_key_value\" id=\"INFGw[HIW1tktbO9nc4u\"><value name=\"KEY\"><block type=\"text\" id=\"!~}qF-i=Q.)ACk[192+{\"><field name=\"TEXT\">height</field></block></value><value name=\"VALUE\"><block type=\"math_number\" id=\"L#K)j/i+K^0k8m*)-|JE\"><field name=\"NUM\">512</field></block></value></block></next></block></next></block></statement></block></value></block></next></block></statement></block><block type=\"procedures_defnoreturn\" id=\"f.]^}{RF81uv(@p:p(@$\" x=\"-70\" y=\"-1150\"><mutation><arg name=\"Dream URL\" varid=\"dV3G)Qt+3U+EO+9h^VpV\"></arg><arg name=\"API\" varid=\"BJs#z}x2#T,+bHdeu=~T\"></arg><arg name=\"Dream data\" varid=\"ZDCf/54/EcVmSN|qrI](\"></arg></mutation><field name=\"NAME\">Start new dream loop</field><comment pinned=\"false\" h=\"80\" w=\"160\">Describe this function...</comment><statement name=\"STACK\"><block type=\"variables_set\" id=\"j29uK,$4`9yJS9D*K}?V\"><field name=\"VAR\" id=\"ZDCf/54/EcVmSN|qrI](\">Dream data</field><value name=\"VALUE\"><block type=\"json_object_merge\" id=\"pX0o]#WiOBBIF3UtmC8.\"><value name=\"DATA\"><block type=\"variables_get\" id=\"!P?9762eG)?2}Nry.N%;\"><field name=\"VAR\" id=\"ZDCf/54/EcVmSN|qrI](\">Dream data</field></block></value><value name=\"DEFAULTS\"><block type=\"variables_get\" id=\"N%cjtWr+IjVM)!v?PL[Z\"><field name=\"VAR\" id=\"BJs#z}x2#T,+bHdeu=~T\">API</field></block></value></block></value><next><block type=\"server_message_post\" id=\"z=B7h)Rr1MfDg1,Z|9-Z\"><field name=\"METHOD\">POST</field><value name=\"URL\"><shadow type=\"text\" id=\"/yqtr9l;@e:O)cog0JY~\"><field name=\"TEXT\">http://10.0.0.3/api/predict</field></shadow><block type=\"variables_get\" id=\"]oP9L$](`R1le`(48r@l\"><field name=\"VAR\" id=\"dV3G)Qt+3U+EO+9h^VpV\">Dream URL</field></block></value><value name=\"DATA\"><block type=\"json_object\" id=\"g,6P_ywbeFJOso_CE.V`\"><statement name=\"STATEMENTS\"><block type=\"json_object_key_value\" id=\"}{8T(*G_=vc_b6e8FnE+\"><value name=\"KEY\"><block type=\"text\" id=\"eEqO*7E*EU$RP{|M,*?!\"><field name=\"TEXT\">fn_index</field></block></value><value name=\"VALUE\"><block type=\"math_number\" id=\"p7OYgu=.yr8075M~VJ9;\"><field name=\"NUM\">2</field></block></value><next><block type=\"json_object_key_value\" id=\"CF7*IL:H_*^lUS~h_)F)\"><value name=\"KEY\"><block type=\"text\" id=\"F`U,B,rNeB74~AcwRF1b\"><field name=\"TEXT\">data</field></block></value><value name=\"VALUE\"><block type=\"lists_create_with\" id=\"uKs)yzh/TbW3R^:*.weF\"><mutation items=\"0\"></mutation></block></value></block></next></block></statement></block></value><statement name=\"THEN_STATEMENTS\"><block type=\"server_message_post\" id=\"1O`.i_k{g#!L9F5^.^y;\"><field name=\"METHOD\">POST</field><value name=\"URL\"><shadow type=\"text\" id=\"/yqtr9l;@e:O)cog0JY~\"><field name=\"TEXT\">http://10.0.0.3/api/predict</field></shadow><block type=\"variables_get\" id=\"xKz?hx4{^aS|tYZPJH-B\"><field name=\"VAR\" id=\"dV3G)Qt+3U+EO+9h^VpV\">Dream URL</field></block></value><value name=\"DATA\"><block type=\"json_object\" id=\"8CNoV#1]a9nlI#9FgxB0\"><statement name=\"STATEMENTS\"><block type=\"json_object_key_value\" id=\"rLLs,IvToru-GKf)!Z@g\"><value name=\"KEY\"><block type=\"text\" id=\"L]a#:zK,g8.gi(K4-4;F\"><field name=\"TEXT\">fn_index</field></block></value><value name=\"VALUE\"><block type=\"math_number\" id=\"w-7q|-W=jN=pH7}|7zL.\"><field name=\"NUM\">11</field></block></value><next><block type=\"json_object_key_value\" id=\"id!0!+5r*#-v(8[B0P(^\"><value name=\"KEY\"><block type=\"text\" id=\"4S5.RA8YfYssahU+4/yi\"><field name=\"TEXT\">data</field></block></value><value name=\"VALUE\"><block type=\"json_object_extract_values\" id=\"9Wa29_du8l(,Tsk[Z7f_\"><value name=\"OBJECT\"><block type=\"variables_get\" id=\"e{{Ip9B#crN@FlikgrFg\"><field name=\"VAR\" id=\"ZDCf/54/EcVmSN|qrI](\">Dream data</field></block></value></block></value></block></next></block></statement></block></value><statement name=\"THEN_STATEMENTS\"><block type=\"feed_send_data\" id=\"If8WWA41tvW4hZ8l_3;:\"><value name=\"DATA\"><block type=\"server_message_post_response\" id=\"l:Df%Oza*5Ri$$va#o~f\"></block></value><value name=\"IMAGE\"><block type=\"json_object_get\" id=\"`QD[IVg=k#h]nU;=p90V\"><value name=\"PATH\"><block type=\"text\" id=\"rBZD5~IXot]f}7+uhH1f\"><field name=\"TEXT\">data[0][0]</field></block></value><value name=\"OBJECT\"><block type=\"server_message_post_response\" id=\"+qP%)67k8{f(C(=E6.hq\"></block></value></block></value><next><block type=\"procedures_callnoreturn\" id=\"=f5w]5h=a+{@+:)jc$Zr\"><mutation name=\"Start new dream loop\"><arg name=\"Dream URL\"></arg><arg name=\"API\"></arg><arg name=\"Dream data\"></arg></mutation><value name=\"ARG0\"><block type=\"variables_get\" id=\"3X%65H/p.]+?k8pQ~+QA\"><field name=\"VAR\" id=\"dV3G)Qt+3U+EO+9h^VpV\">Dream URL</field></block></value><value name=\"ARG1\"><block type=\"variables_get\" id=\";,{}ywigE)1C.ZaTh`wE\"><field name=\"VAR\" id=\"BJs#z}x2#T,+bHdeu=~T\">API</field></block></value><value name=\"ARG2\"><block type=\"variables_get\" id=\"?Q.?#*;$/8vv[*GtJX_I\"><field name=\"VAR\" id=\"ZDCf/54/EcVmSN|qrI](\">Dream data</field></block></value></block></next></block></statement><statement name=\"ERROR_STATEMENTS\"><block type=\"feed_send_data\" id=\"FDc+wHQC8E;UPus)1JZm\"><value name=\"DATA\"><block type=\"server_message_post_response\" id=\"V`9QdP-}1kuWfN3!c/fV\"></block></value></block></statement></block></statement><statement name=\"ERROR_STATEMENTS\"><block type=\"feed_send_data\" id=\"tO?x!9nIIuu9khjav8yM\"><value name=\"DATA\"><block type=\"server_message_post_response\" id=\":p7MX)i+ExPHlN+ur6**\"></block></value></block></statement></block></next></block></statement></block><block type=\"on_end\" id=\"d3}bC[602+:]_szzVHiy\" x=\"-1150\" y=\"-430\"><statement name=\"POST_DATA\"><block type=\"procedures_callnoreturn\" id=\"Zs8Bp,H:d-pDrVu[Y5zt\"><mutation name=\"AUTOMATIC1111 - STOP\"><arg name=\"Stop URL\"></arg></mutation><value name=\"ARG0\"><block type=\"text\" id=\"I8AxNe=lH)!VJ-iaMXJ}\"><field name=\"TEXT\">http://server1:7860/api/predict</field></block></value><next><block type=\"procedures_callnoreturn\" id=\"Q;k[$xj5`)_4fRhoMX3S\"><mutation name=\"AUTOMATIC1111 - STOP\"><arg name=\"Stop URL\"></arg></mutation><value name=\"ARG0\"><block type=\"text\" id=\":#V`C)kIs+@zg0F5NBm1\"><field name=\"TEXT\">http://server2/api/predict</field></block></value></block></next></block></statement></block><block type=\"variables_set\" id=\"M0:l~R`myMrHs;5lReol\" x=\"-1150\" y=\"-90\"><field name=\"VAR\" id=\"kK%y)Kx{S}/Xg!!+@lGv\">API - Google Colab</field><value name=\"VALUE\"><block type=\"json_object\" id=\"iOh#OWCBXS[61dEWSj%b\"><statement name=\"STATEMENTS\"><block type=\"json_object_key_value\" id=\"l7Y=Dj`(KJZC8$S1-oTP\"><value name=\"KEY\"><block type=\"text\" id=\"6N.=zX{R1},-017L`,TM\"><field name=\"TEXT\">prompt</field></block></value><value name=\"VALUE\"><block type=\"text\" id=\"Iji4uY5Z:uEN,-|X~!+^\"><field name=\"TEXT\">oil painting above the clouds, vaporwave aesthetics</field></block></value><next><block type=\"json_object_key_value\" id=\"-RHV7Zr4t@zMCFP).OCv\"><value name=\"KEY\"><block type=\"text\" id=\"^UrcMs**xOh9i%p?nK8H\"><field name=\"TEXT\">negative</field></block></value><value name=\"VALUE\"><block type=\"text\" id=\")UzqTk-fGE2wPjI_22la\"><field name=\"TEXT\"></field></block></value><next><block type=\"json_object_key_value\" id=\"/|B4,iH`1e=`@Gp#m@mO\"><value name=\"KEY\"><block type=\"text\" id=\"E!@L)nwni]9xtUE-br}_\"><field name=\"TEXT\">unknown1</field></block></value><value name=\"VALUE\"><block type=\"text\" id=\"M@(:Q2JoA|4sA`P$|OmA\"><field name=\"TEXT\">None</field></block></value><next><block type=\"json_object_key_value\" id=\"Lj`oQNXTY!}ZG@#*v;=i\"><value name=\"KEY\"><block type=\"text\" id=\"8jZb5f|!A1!/wWq1p!(w\"><field name=\"TEXT\">unknown2</field></block></value><value name=\"VALUE\"><block type=\"text\" id=\"7D|YmGSjI{I@`Egeq=@v\"><field name=\"TEXT\">None</field></block></value><next><block type=\"json_object_key_value\" id=\"bCuzPS0qfSYW3t~BCea.\"><value name=\"KEY\"><block type=\"text\" id=\"4jx#0ets{bL`FVqTbp)|\"><field name=\"TEXT\">samples</field></block></value><value name=\"VALUE\"><block type=\"math_number\" id=\"Ji:3xmyuQ!A_8k1Ls($J\"><field name=\"NUM\">30</field></block></value><next><block type=\"json_object_key_value\" id=\"5cj:=0N7,S2[#{R6^-FV\"><value name=\"KEY\"><block type=\"text\" id=\"TEWF[Y.cF~3P7~BNxR+2\"><field name=\"TEXT\">sampling method</field></block></value><value name=\"VALUE\"><block type=\"text\" id=\"m4=?U@v^0`[oB5rf_@tF\"><field name=\"TEXT\">Euler a</field></block></value><next><block type=\"json_object_key_value\" id=\"S1uuJfH0]#08,#cd~D=t\"><value name=\"KEY\"><block type=\"text\" id=\"GsP1;D53hJhFqV5hwt??\"><field name=\"TEXT\">unknown2_2</field></block></value><value name=\"VALUE\"><block type=\"logic_boolean\" id=\"gVwMG207o#F.6;/o8N7_\"><field name=\"BOOL\">FALSE</field></block></value><next><block type=\"json_object_key_value\" id=\"MeX88MYHu]EmpSA3W7v;\"><value name=\"KEY\"><block type=\"text\" id=\"PAIa/$y0GCv6o!BF03`*\"><field name=\"TEXT\">unknown2_3</field></block></value><value name=\"VALUE\"><block type=\"logic_boolean\" id=\"T$F@![de^#4PURcvq=le\"><field name=\"BOOL\">FALSE</field></block></value><next><block type=\"json_object_key_value\" id=\"E;4r8(K+`=nhy]Paa?vD\"><value name=\"KEY\"><block type=\"text\" id=\"Yil_[{[,:lUu5.Hj[+8L\"><field name=\"TEXT\">batch size</field></block></value><value name=\"VALUE\"><block type=\"math_number\" id=\"8x:F.9b-DfG=8DA$uAi4\"><field name=\"NUM\">1</field></block></value><next><block type=\"json_object_key_value\" id=\"xthcz]bvfA1@=0sS[N`F\"><value name=\"KEY\"><block type=\"text\" id=\"}9Kehm{6QT0z{r4[t;~j\"><field name=\"TEXT\">batch count</field></block></value><value name=\"VALUE\"><block type=\"math_number\" id=\"0nzg1x!Map?gxrVAhNMl\"><field name=\"NUM\">1</field></block></value><next><block type=\"json_object_key_value\" id=\"~r,Yo(cXyRe5[pHlt|*X\"><value name=\"KEY\"><block type=\"text\" id=\"t_7h)b3o9pfX+n-tfMnz\"><field name=\"TEXT\">cfg</field></block></value><value name=\"VALUE\"><block type=\"math_number\" id=\"w:#0B:8./3;!8/HaN_BE\"><field name=\"NUM\">7</field></block></value><next><block type=\"json_object_key_value\" id=\"+U0hR|iLXXVu.i~mg[2r\"><value name=\"KEY\"><block type=\"text\" id=\"t{a@gd,Ov^B.s_85-@/b\"><field name=\"TEXT\">unknown 3</field></block></value><value name=\"VALUE\"><block type=\"math_number\" id=\"ep%6_7mtd82m@:XHhc:a\"><field name=\"NUM\">-1</field></block></value><next><block type=\"json_object_key_value\" id=\"EH1yLgp~dIN(r/SFQP50\"><value name=\"KEY\"><block type=\"text\" id=\"!IcXVH~?egQjV+X(__zY\"><field name=\"TEXT\">unknown 4</field></block></value><value name=\"VALUE\"><block type=\"math_number\" id=\"+yR,,-?-~$?]:oQOiYE*\"><field name=\"NUM\">-1</field></block></value><next><block type=\"json_object_key_value\" id=\"6Kf9%_.|EW[pjrG-avSU\"><value name=\"KEY\"><block type=\"text\" id=\"d[Qcd#WU=8m/Ri68=)3c\"><field name=\"TEXT\">unknown 5</field></block></value><value name=\"VALUE\"><block type=\"math_number\" id=\"Szbnrxs~P`[qTmwajAtM\"><field name=\"NUM\">0</field></block></value><next><block type=\"json_object_key_value\" id=\"Rb|c=XDsl!2?($4+)Nse\"><value name=\"KEY\"><block type=\"text\" id=\"[s+T4oJ^U$s,./TORT~b\"><field name=\"TEXT\">unknown 6</field></block></value><value name=\"VALUE\"><block type=\"math_number\" id=\"KV%EIOisgMO%*kE:*O0h\"><field name=\"NUM\">0</field></block></value><next><block type=\"json_object_key_value\" id=\"VMQRd1V#rwqdy+Fr^!B2\"><value name=\"KEY\"><block type=\"text\" id=\"aH4B,Rm*T#wxW+`oqgon\"><field name=\"TEXT\">unknown 7</field></block></value><value name=\"VALUE\"><block type=\"math_number\" id=\"1HALCS?%K`_`038DAhfe\"><field name=\"NUM\">0</field></block></value><next><block type=\"json_object_key_value\" id=\"2@9Fjk80G`esR|$Mo%*s\"><value name=\"KEY\"><block type=\"text\" id=\"R.~1ZA]1OwV$7T)$O;L{\"><field name=\"TEXT\">unknown 8</field></block></value><value name=\"VALUE\"><block type=\"logic_boolean\" id=\".`M0{9(r@s.ukcJ*aDVb\"><field name=\"BOOL\">FALSE</field></block></value><next><block type=\"json_object_key_value\" id=\"?LmmdR[S2#vh@B.%{I`1\"><value name=\"KEY\"><block type=\"text\" id=\"~BhphJ8Y#l-*G!`~QTi-\"><field name=\"TEXT\">height</field></block></value><value name=\"VALUE\"><block type=\"math_number\" id=\"A^I+v]q2v~Uzw.ZS|}NJ\"><field name=\"NUM\">384</field></block></value><next><block type=\"json_object_key_value\" id=\"!=0Vp5^W28`t=pss4r[a\"><value name=\"KEY\"><block type=\"text\" id=\"[};JvIctsL|{#!6~k^QO\"><field name=\"TEXT\">width</field></block></value><value name=\"VALUE\"><block type=\"math_number\" id=\"6@Fc68,xxgHl4#jaq9wd\"><field name=\"NUM\">384</field></block></value><next><block type=\"json_object_key_value\" id=\"W^_#y1ok{SCdx)|-5eq8\"><value name=\"KEY\"><block type=\"text\" id=\"YyCPpc]jQ2?utX4$:EU{\"><field name=\"TEXT\">unknown 9</field></block></value><value name=\"VALUE\"><block type=\"logic_boolean\" id=\"^7FGAwNPn,L^[s;lkA*i\"><field name=\"BOOL\">FALSE</field></block></value><next><block type=\"json_object_key_value\" id=\"Klk-?I3K?#,Zjnq/D0um\"><value name=\"KEY\"><block type=\"text\" id=\"QHM!`/4+@FBuj~w!{/z$\"><field name=\"TEXT\">unknown 10</field></block></value><value name=\"VALUE\"><block type=\"logic_boolean\" id=\"CeBE%Ho}DmuRhR4UNtQ`\"><field name=\"BOOL\">FALSE</field></block></value><next><block type=\"json_object_key_value\" id=\"0bPru@7W$z)_gy^Xc.u/\"><value name=\"KEY\"><block type=\"text\" id=\"*v+omuR,}V-Gx?GW(V@s\"><field name=\"TEXT\">denoising</field></block></value><value name=\"VALUE\"><block type=\"math_number\" id=\"iR2xL47s%b,Da[$|/Z{?\"><field name=\"NUM\">0.7</field></block></value><next><block type=\"json_object_key_value\" id=\"^RyT0?QWTYsFDKKYQ$/V\"><value name=\"KEY\"><block type=\"text\" id=\"ZOxh{!u?;D[Fw1K5w?w6\"><field name=\"TEXT\">unknown 11</field></block></value><value name=\"VALUE\"><block type=\"text\" id=\"n:eWb79Y|k@5Y@FbIjxe\"><field name=\"TEXT\">None</field></block></value><next><block type=\"json_object_key_value\" id=\"BK=s_?65{+Jr,D`$R{-`\"><value name=\"KEY\"><block type=\"text\" id=\"mQ/B=auY}13+y/TV4y]g\"><field name=\"TEXT\">unknown 15</field></block></value><value name=\"VALUE\"><block type=\"text\" id=\"$P@RGBA:|^~b8l9JM~!Z\"><field name=\"TEXT\">Seed</field></block></value><next><block type=\"json_object_key_value\" id=\"E+fs]*w;Ny9vYmhx(hPn\"><value name=\"KEY\"><block type=\"text\" id=\"Xy?yy^XK7C``HO@Rs[}Q\"><field name=\"TEXT\">unknown 16</field></block></value><value name=\"VALUE\"><block type=\"text\" id=\"$#BVrhkhS{6}@~yy^hjd\"><field name=\"TEXT\"></field></block></value><next><block type=\"json_object_key_value\" id=\"Q1Xi82PWwdkGMQef}HOW\"><value name=\"KEY\"><block type=\"text\" id=\"3q;$!C+$:t3caG4KLa^;\"><field name=\"TEXT\">unknown 17</field></block></value><value name=\"VALUE\"><block type=\"text\" id=\"jI.JAIE7EuWg}pZe]wtp\"><field name=\"TEXT\">Steps</field></block></value><next><block type=\"json_object_key_value\" id=\"Umh2sY26_a,!zHWwR#*^\"><value name=\"KEY\"><block type=\"text\" id=\"cUG+=Nd0$~=7{jE1udU0\"><field name=\"TEXT\">unknown 18</field></block></value><value name=\"VALUE\"><block type=\"text\" id=\"`~ab7AlzcN{Nsm=l4s~=\"><field name=\"TEXT\"></field></block></value><next><block type=\"json_object_key_value\" id=\"fMu2)fUQrXtGARlL}.{i\"><value name=\"KEY\"><block type=\"text\" id=\"@WG}v*o|fUiW-NA;RJew\"><field name=\"TEXT\">unknown 19</field></block></value><value name=\"VALUE\"><block type=\"logic_boolean\" id=\"=@G~zz2z!L,uI1s0=0m4\"><field name=\"BOOL\">TRUE</field></block></value><next><block type=\"json_object_key_value\" id=\"sfKUykslD^F(u-b{@r.f\"><value name=\"KEY\"><block type=\"text\" id=\"[LhgD1;oFtNqt}fZIY!f\"><field name=\"TEXT\">unknown 20</field></block></value><value name=\"VALUE\"><block type=\"logic_boolean\" id=\"2LDv(CXe:^YRdx34QC|j\"><field name=\"BOOL\">FALSE</field></block></value><next><block type=\"json_object_key_value\" id=\"i8TK0Y)Cz|R,T6/l4P}K\"><value name=\"KEY\"><block type=\"text\" id=\"XU}?uyo/?*:7J^~RuTT]\"><field name=\"TEXT\">unknown 12_2</field></block></value><value name=\"VALUE\"><block type=\"logic_boolean\" id=\"$_BNgtwR;Zr$L6ZD2pJE\"><field name=\"BOOL\">FALSE</field></block></value><next><block type=\"json_object_key_value\" id=\".wMBTO_2x*/gF;WPh2oa\"><value name=\"KEY\"><block type=\"text\" id=\"sk57A]K#!AMXq)W96Q^]\"><field name=\"TEXT\">unknown 13</field></block></value><value name=\"VALUE\"><block type=\"logic_null\" id=\"%R.iz`((3$wtXWG~vw`u\"></block></value><next><block type=\"json_object_key_value\" id=\"SIU6OHjDeLjfo{W),1(4\"><value name=\"KEY\"><block type=\"text\" id=\"j2^voNOR}g{WB4wM-+_G\"><field name=\"TEXT\">unknown 14</field></block></value><value name=\"VALUE\"><block type=\"text\" id=\"/;+ja$O9CT(kSH53KS~/\"><field name=\"TEXT\"></field></block></value><next><block type=\"json_object_key_value\" id=\"}!;!7{Xq$AJJT/feYz~!\"><value name=\"KEY\"><block type=\"text\" id=\"Kg[Mg0@MyyY_d|,Nq]]3\"><field name=\"TEXT\">unknown 21</field></block></value><value name=\"VALUE\"><block type=\"logic_null\" id=\"jvXHZJ2WA0D{=a4@=IVw\"></block></value><next><block type=\"json_object_key_value\" id=\"g|yD~%zf5[$X:wJo5X0w\"><value name=\"KEY\"><block type=\"text\" id=\"]bttisy!N:M5E7+Eo_VW\"><field name=\"TEXT\">json_string</field></block></value><value name=\"VALUE\"><block type=\"text\" id=\"=Yfw*i$}+lG}w~3$t;YK\"><field name=\"TEXT\"></field></block></value><next><block type=\"json_object_key_value\" id=\"4,I[?9{x0?48FaREPm)U\"><value name=\"KEY\"><block type=\"text\" id=\"u!dvEI:TdgP|7]c64D.E\"><field name=\"TEXT\">status_notes</field></block></value><value name=\"VALUE\"><block type=\"text\" id=\"XLfeFR#4h#u;X4As%+p|\"><field name=\"TEXT\"></field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block></value></block><block type=\"procedures_defnoreturn\" id=\"R2dAJ^iEdW[(M6)0OaDr\" x=\"-90\" y=\"-110\"><mutation><arg name=\"Stop URL\" varid=\"CZ3v^)fgWN%SUyC5,7kl\"></arg></mutation><field name=\"NAME\">AUTOMATIC1111 - STOP</field><comment pinned=\"false\" h=\"80\" w=\"160\">Describe this function...</comment><statement name=\"STACK\"><block type=\"server_message_post\" id=\"mBs2eJ@(b~1p*-8lk$TU\"><field name=\"METHOD\">POST</field><value name=\"URL\"><shadow type=\"text\" id=\"/yqtr9l;@e:O)cog0JY~\"><field name=\"TEXT\">http://10.0.0.3/api/predict</field></shadow><block type=\"variables_get\" id=\"m.W(5AW9t6H^IZ%5$5A}\"><field name=\"VAR\" id=\"CZ3v^)fgWN%SUyC5,7kl\">Stop URL</field></block></value><value name=\"DATA\"><block type=\"json_object\" id=\"c}O|=4Gc-@H9/k:]Fz:+\"><statement name=\"STATEMENTS\"><block type=\"json_object_key_value\" id=\"Lblr3/AU-4WfWZUd1)~/\"><value name=\"KEY\"><block type=\"text\" id=\"c#{s~y,th?84PkG/#VR-\"><field name=\"TEXT\">fn_index</field></block></value><value name=\"VALUE\"><block type=\"math_number\" id=\"LVW;,O_b_9mZl+ygR?9Y\"><field name=\"NUM\">0</field></block></value><next><block type=\"json_object_key_value\" id=\"%DUvuiN-*FsKz{MVy9L;\"><value name=\"KEY\"><block type=\"text\" id=\"*}KLxezTi/$HZ1r4eOz`\"><field name=\"TEXT\">data</field></block></value><value name=\"VALUE\"><block type=\"lists_create_with\" id=\"vw$LT49zcUHlw4#|R!Tz\"><mutation items=\"0\"></mutation></block></value></block></next></block></statement></block></value><statement name=\"FINALLY_STATEMENTS\"><block type=\"feed_send_data\" id=\"Swd.lQflV~~[H_+.PuqE\"><value name=\"DATA\"><block type=\"server_message_post_response\" id=\"y_NG/|4;bk_uf2dYx(d.\"></block></value></block></statement></block></statement></block></xml>","id":"c610704c-f84a-4fcc-ae24-47998a4351aa","title":"Stable Diffusion looper","description":"Some blocks for AUTOMATIC1111's Stable Diffusion WebUI"},{"viewLeft":-628.2000792894469,"viewTop":-432.6000171375672,"scale":1.0039151537024438,"workspace":"<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"m88sR}?k^7IWl4GEAfur\">images</variable><variable id=\"A=,}EWf.16|$T=xc?_I3\">i</variable><variable id=\"eOYg+Pp?;=C+SxuRVt=a\">feedData</variable></variables><block type=\"server_message_post\" id=\"ko=ns[4;0j_g2jz`m705\" x=\"-350\" y=\"-310\"><field name=\"METHOD\">GET</field><value name=\"URL\"><shadow type=\"text\" id=\"y]MHdfIw--S#hj2?j:~{\"><field name=\"TEXT\">https://lexica.art/api/v1/search?q=trains</field></shadow></value><statement name=\"THEN_STATEMENTS\"><block type=\"variables_set\" id=\"r?KKRq#2xJF+SCPMwTC2\"><field name=\"VAR\" id=\"m88sR}?k^7IWl4GEAfur\">images</field><value name=\"VALUE\"><block type=\"json_object_get\" id=\"f!8UvjVI-)gwEKsGC4L-\"><value name=\"PATH\"><block type=\"text\" id=\"^4cj$mH2$:x9FvmRueVm\"><field name=\"TEXT\">images</field></block></value><value name=\"OBJECT\"><block type=\"server_message_post_response\" id=\"8?,gHiTyf8UuAqRd^gIL\"></block></value></block></value><next><block type=\"controls_for\" id=\"c=3T%P(Jj?5USt$Ahpz]\"><field name=\"VAR\" id=\"A=,}EWf.16|$T=xc?_I3\">i</field><value name=\"FROM\"><block type=\"math_number\" id=\"@{rEx1s{O`_8Oa!?uNmU\"><field name=\"NUM\">0</field></block></value><value name=\"TO\"><block type=\"lists_length\" id=\"d:C2}?t|]v|7KDh.EBlL\"><value name=\"VALUE\"><block type=\"variables_get\" id=\"teQ/T78%HUf~h}eJ!+,M\"><field name=\"VAR\" id=\"m88sR}?k^7IWl4GEAfur\">images</field></block></value></block></value><value name=\"BY\"><block type=\"math_number\" id=\"#FfTEYkh5sZ3?U~1Bwla\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"variables_set\" id=\"8jOl=Pk|plO0xpjI^6:W\"><field name=\"VAR\" id=\"eOYg+Pp?;=C+SxuRVt=a\">feedData</field><value name=\"VALUE\"><block type=\"lists_getIndex\" id=\".DZ4BJ@0zR5feKy[9fRO\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\" id=\"n97xCrXI|1PI[L#%*Qv3\"><field name=\"VAR\" id=\"m88sR}?k^7IWl4GEAfur\">images</field></block></value><value name=\"AT\"><block type=\"variables_get\" id=\"D$%*T%tq7/1NU2n(G~kQ\"><field name=\"VAR\" id=\"A=,}EWf.16|$T=xc?_I3\">i</field></block></value></block></value><next><block type=\"feed_send_data\" id=\"V(TRJ`/K0fT-6e+}wa*H\"><value name=\"DATA\"><block type=\"variables_get\" id=\"6C$pc](Sl(r@#~B.cOF7\"><field name=\"VAR\" id=\"eOYg+Pp?;=C+SxuRVt=a\">feedData</field></block></value><value name=\"TITLE\"><block type=\"json_object_get\" id=\"S%MU]`QG6)sxi11n+cN9\"><value name=\"PATH\"><block type=\"text\" id=\"YojtBR~Oix+HYi{^(kRR\"><field name=\"TEXT\">prompt</field></block></value><value name=\"OBJECT\"><block type=\"variables_get\" id=\"~hUu|DQGZ|TW|9QD]p7p\"><field name=\"VAR\" id=\"eOYg+Pp?;=C+SxuRVt=a\">feedData</field></block></value></block></value><value name=\"IMAGE\"><block type=\"json_object_get\" id=\"lQi_x9qi,a#r4h3#M3#0\"><value name=\"PATH\"><block type=\"text\" id=\"}|@4`3tw(@LfiPs00Z8}\"><field name=\"TEXT\">src</field></block></value><value name=\"OBJECT\"><block type=\"variables_get\" id=\"u9eoZKP3/4(d7T)vnYmV\"><field name=\"VAR\" id=\"eOYg+Pp?;=C+SxuRVt=a\">feedData</field></block></value></block></value></block></next></block></statement></block></next></block></statement><statement name=\"ERROR_STATEMENTS\"><block type=\"feed_send_data\" id=\"E+!_T0w7CIMl+c-u=YWX\"><value name=\"DATA\"><block type=\"server_message_post_response\" id=\",5v#FeaDeO]N*z.*K+^~\"></block></value></block></statement></block></xml>","id":"1b8c46a7-145a-4d23-b076-4d8538afe220","title":"Lexica.art Loader","description":"Demonstrates how to load prompts given a certain key word"}],
    "currentWorkspace": {"viewLeft":-572.844607378689,"viewTop":-372.1834965155301,"scale":1.0039151537024427,"workspace":"<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"m88sR}?k^7IWl4GEAfur\">images</variable><variable id=\"A=,}EWf.16|$T=xc?_I3\">i</variable><variable id=\"eOYg+Pp?;=C+SxuRVt=a\">feedData</variable></variables><block type=\"server_message_post\" id=\"ko=ns[4;0j_g2jz`m705\" x=\"-350\" y=\"-310\"><field name=\"METHOD\">GET</field><value name=\"URL\"><shadow type=\"text\" id=\"y]MHdfIw--S#hj2?j:~{\"><field name=\"TEXT\">https://lexica.art/api/v1/search?q=trains</field></shadow></value><statement name=\"THEN_STATEMENTS\"><block type=\"variables_set\" id=\"r?KKRq#2xJF+SCPMwTC2\"><field name=\"VAR\" id=\"m88sR}?k^7IWl4GEAfur\">images</field><value name=\"VALUE\"><block type=\"json_object_get\" id=\"f!8UvjVI-)gwEKsGC4L-\"><value name=\"PATH\"><block type=\"text\" id=\"^4cj$mH2$:x9FvmRueVm\"><field name=\"TEXT\">images</field></block></value><value name=\"OBJECT\"><block type=\"server_message_post_response\" id=\"8?,gHiTyf8UuAqRd^gIL\"></block></value></block></value><next><block type=\"controls_for\" id=\"c=3T%P(Jj?5USt$Ahpz]\"><field name=\"VAR\" id=\"A=,}EWf.16|$T=xc?_I3\">i</field><value name=\"FROM\"><block type=\"math_number\" id=\"@{rEx1s{O`_8Oa!?uNmU\"><field name=\"NUM\">0</field></block></value><value name=\"TO\"><block type=\"lists_length\" id=\"d:C2}?t|]v|7KDh.EBlL\"><value name=\"VALUE\"><block type=\"variables_get\" id=\"teQ/T78%HUf~h}eJ!+,M\"><field name=\"VAR\" id=\"m88sR}?k^7IWl4GEAfur\">images</field></block></value></block></value><value name=\"BY\"><block type=\"math_number\" id=\"#FfTEYkh5sZ3?U~1Bwla\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"variables_set\" id=\"8jOl=Pk|plO0xpjI^6:W\"><field name=\"VAR\" id=\"eOYg+Pp?;=C+SxuRVt=a\">feedData</field><value name=\"VALUE\"><block type=\"lists_getIndex\" id=\".DZ4BJ@0zR5feKy[9fRO\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\" id=\"n97xCrXI|1PI[L#%*Qv3\"><field name=\"VAR\" id=\"m88sR}?k^7IWl4GEAfur\">images</field></block></value><value name=\"AT\"><block type=\"variables_get\" id=\"D$%*T%tq7/1NU2n(G~kQ\"><field name=\"VAR\" id=\"A=,}EWf.16|$T=xc?_I3\">i</field></block></value></block></value><next><block type=\"feed_send_data\" id=\"V(TRJ`/K0fT-6e+}wa*H\"><value name=\"DATA\"><block type=\"variables_get\" id=\"6C$pc](Sl(r@#~B.cOF7\"><field name=\"VAR\" id=\"eOYg+Pp?;=C+SxuRVt=a\">feedData</field></block></value><value name=\"TITLE\"><block type=\"json_object_get\" id=\"S%MU]`QG6)sxi11n+cN9\"><value name=\"PATH\"><block type=\"text\" id=\"YojtBR~Oix+HYi{^(kRR\"><field name=\"TEXT\">prompt</field></block></value><value name=\"OBJECT\"><block type=\"variables_get\" id=\"~hUu|DQGZ|TW|9QD]p7p\"><field name=\"VAR\" id=\"eOYg+Pp?;=C+SxuRVt=a\">feedData</field></block></value></block></value><value name=\"IMAGE\"><block type=\"json_object_get\" id=\"lQi_x9qi,a#r4h3#M3#0\"><value name=\"PATH\"><block type=\"text\" id=\"}|@4`3tw(@LfiPs00Z8}\"><field name=\"TEXT\">src</field></block></value><value name=\"OBJECT\"><block type=\"variables_get\" id=\"u9eoZKP3/4(d7T)vnYmV\"><field name=\"VAR\" id=\"eOYg+Pp?;=C+SxuRVt=a\">feedData</field></block></value></block></value></block></next></block></statement></block></next></block></statement><statement name=\"ERROR_STATEMENTS\"><block type=\"feed_send_data\" id=\"E+!_T0w7CIMl+c-u=YWX\"><value name=\"DATA\"><block type=\"server_message_post_response\" id=\",5v#FeaDeO]N*z.*K+^~\"></block></value></block></statement></block></xml>","id":"1b8c46a7-145a-4d23-b076-4d8538afe220","title":"Lexica.art Loader","description":"Demonstrates how to load prompts given a certain key word"},
  }
}
