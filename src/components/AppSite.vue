<template>
  <div class="bg">
    <div class="container">
      <div class="menu_list">
        <div class="logo">
          <img class="cfmoto" src="../../src/assets/cfmoto.png" alt="" />
        </div>
        <div class="txt_con">
          <div class="txt_con1">Маршруты</div>
          <div class="txt_con1">Галерея</div>
          <div class="txt_con1">Вопрос-Ответ</div>
          <div class="txt_con1">Контакты</div>
          <div class="txt_con1" style="color: rgb(3, 126, 140)">
            Забронировать
          </div>
        </div>
        <div class="phone_icon">
          <div class="phone_h1">
            <img src="../../src/assets/phone.png" alt="" />
            <h1 class="h1_phone">+7 928 333 26 45</h1>
          </div>
          <button>sd</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AppSite",
  // data: () => ({
  //   width: 50,
  // }),
};
</script>
<style scoped>
.bg {
  width: 100%;
  height: 900px;
  position: absolute;
  top: 0;
  left: 0;
  background: url("/..//site//src//assets//background.png") no-repeat center
    center;
  background-size: cover;
}
.container {
  padding: 12px 0px 0px 0px;
}
.menu_list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  /* position: absolute;
  width: 111px;
  height: 142px;
  left: 70px;
  top: 12px; */
  margin-right: 50px;
}
.txt_con {
  display: flex;
  /* flex-direction: row; */
  justify-content: center;
  align-items: center;
  /* margin-top: 39px; */
}
.txt_con1 {
  /* position: absolute; */
  /* top: 39px;
  left: 25%; */
  margin: 0px 50px 0 0;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 104.7%;
  /* identical to box height, or 15px */

  text-transform: uppercase;
  color: white;
}
.txt_con1:last-child {
  margin: 0px;
}
a {
  text-decoration: none;
}
.phone_h1 {
  display: flex;
  align-items: baseline;
  /* padding-left: 100px; */
}
.phone_icon {
  /* padding-left: 100px; */
}
.h1_phone {
  /* display: flex; */
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 104.7%;
  /* identical to box height, or 21px */

  letter-spacing: 0.02em;

  color: #ffffff;
}
</style>
