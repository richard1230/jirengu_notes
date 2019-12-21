[TOC]

![]((2_1_)ssh绑定git和github_files/ad11a6f9-9945-4966-b7fa-b0073d055ed4.png)

下载失败!

![]((2_1_)ssh绑定git和github_files/0c075776-e057-4dce-9a76-d1711b313b5b.png)


![]((2_1_)ssh绑定git和github_files/e46c4192-943c-42cb-9eba-cfef5746958a.png)

![]((2_1_)ssh绑定git和github_files/3699f018-9369-407a-9f83-526ece79b57c.png)

![]((2_1_)ssh绑定git和github_files/bada8359-1f0b-4b39-b847-94dec6a3f8c4.png)
![]((2_1_)ssh绑定git和github_files/61c4c0bb-703e-48dd-81e3-10fe1e90d064.png)
我们只需要将公钥`id_rsa.pub`的内容粘贴到`Key`处的位置（`Titles`的内容不填写也没事），然后点击`Add SSH key` 即可
![]((2_1_)ssh绑定git和github_files/12fc7af8-4189-4d6e-8de1-2c01ddedbfd4.png)

测试成功:
`ssh -T git@github.com`
![]((2_1_)ssh绑定git和github_files/14fe8318-b103-4fa0-9108-4bd91c69d792.png)

![]((2_1_)ssh绑定git和github_files/d2603f4f-212d-4963-b54f-934406131aa6.png)
下载成功!
`git clone git@github.com:brianpow/firmware-mod-kit.git`