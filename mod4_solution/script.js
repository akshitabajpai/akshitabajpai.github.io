var names=new Array();
names[0]="Anjali";
names[1]="jahnvi";
names[2]="Jessica";
names[3]="Siddharth";
names[4]="Piyush";
names[5]="Virat";
names[6]="Manya";
names[7]="joy";
names[8]="John";
names[9]="Akshita";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
