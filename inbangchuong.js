/**
 * Created by thanh on 12/04/17.
 */
var bangcuuchuong = () =>{
    console.log('       '+' ---------------------------------');
    console.log('       '+'|CHUONG TRINH TINH BANG CUU CHUONG|');
    console.log('       '+' ---------------------------------');
    var temp ='' ;

    for(let i=1; i<=10;i++)
    {
        temp += '  _' + i ;

    }
    console.log('  '+temp + '_');

     for(let i= 1; i<=10; i++)
   {
         let dem = i;
        let tam ='';
        for(let j = 1; j<=10; j++){

            if((j>=1)&&(j<10) && (dem*j)<10)
            {
                tam += ' '+dem*j +'  ';
            }
            else{
                tam +=  ' '+dem*j+' ';
            }
        }
        if(i<=9){
            console.log(' '+i +' '+'|' +tam +' |');
        }
        else{
            console.log(' '+i +'|'+tam + '|');
        }

     }

 };
 bangcuuchuong();

