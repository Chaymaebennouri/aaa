function Member(name,id,grade){
    this.name=name;
    this.id=id;
    this.grade=grade;
    this.toString=function(){
        let str="";
        return str;
    }
}
function Team(name,id){
    this.name=name;
    this.id=id;
    this.members = new Array;
    this.addMember=function(m){
        this.members.push(m);
    }
    this.toString=function(){
        let str="";
        return str;
    }
}
var m1=new Member("Rachid",1,"A");
var m2=new Member("Dounia",2,"C");
var m3=new Member("Hanna",3,"B");
var m4=new Member("Fouad",4,"A");
var est=new Team("est",1);
var fst=new Team("fst",2);
est.addMember(m1);
est.addMember(m2);
fst.addMember(m3);
fst.addMember(m4);