const app = Vue.createApp({
    template:'',
    data(){
        return{
            firstName :'Hamza',
            lastName :'Ejaz',
            email:'hejaz342@gmial.com',
            gender:'male',
            pic:'https://scontent.fisb5-1.fna.fbcdn.net/v/t39.30808-1/294640029_423805983019741_4590266448025692411_n.jpg?stp=dst-jpg_p160x160&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGNGWcERpmRmSP5u3LJ70p3Nzxd2KDUVOY3PF3YoNRU5uAXinVMsGZKOP7HJwe2qkfvK2X6T1TyArfOyU27elkM&_nc_ohc=NS_nW9zCkGsAX8LczXv&_nc_ht=scontent.fisb5-1.fna&oh=00_AT_uR9uVmRDBR6_ly0MfOrCwmkmLEMtQEqq0cPVt89McSQ&oe=632974F4'
        }
    },
    methods: {
        getUser(){
            this.firstName="girl"
            this.lastName="karlal"
            this.email="girlkarlal@gmail.com"
            this.pic="https://scontent.fisb5-1.fna.fbcdn.net/v/t1.6435-1/36257458_214812072673285_5719378051368747008_n.jpg?stp=dst-jpg_p200x200&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeH3ZwCbaQPpynDaixGwJMY35an_FRzy8O3lqf8VHPLw7UUTuyFr6iUhn0mVLcXyekuyUkCpWaXQBtg1Tzls3ySX&_nc_ohc=Wncixa_LXeAAX8hXXdQ&_nc_ht=scontent.fisb5-1.fna&oh=00_AT8V3mA8_RkQ8tdxVJ8-TYOCSuUL0nmjWtWHYsP3xMuAdQ&oe=6349A8B8"
            this.gender="female"
        },
        dblclk(){
            this.firstName="Hamza"
            this.lastName="Ejaz"
            this.email="hejaz342@gmail.com"
            this.pic="https://scontent.fisb5-1.fna.fbcdn.net/v/t39.30808-1/294640029_423805983019741_4590266448025692411_n.jpg?stp=dst-jpg_p160x160&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGNGWcERpmRmSP5u3LJ70p3Nzxd2KDUVOY3PF3YoNRU5uAXinVMsGZKOP7HJwe2qkfvK2X6T1TyArfOyU27elkM&_nc_ohc=NS_nW9zCkGsAX8LczXv&_nc_ht=scontent.fisb5-1.fna&oh=00_AT_uR9uVmRDBR6_ly0MfOrCwmkmLEMtQEqq0cPVt89McSQ&oe=632974F4"
            this.gender="male" 
        }
    },
    
})
app.mount('#app')