export default function difference(a,b){
    if(Math.sign(a-b)===-1){
        return -(a-b);
    } else {
        return a-b;
    }
}

