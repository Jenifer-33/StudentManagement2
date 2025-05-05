const students=[
    {   studentId:922122106027,
        name:"Divya",
        grade:7.9,
        courses:["industrial safety","renewable energy","embedded systems","aiml"],
        attendence:{
          "date1:1-05-2025":true,
          "date2:2-05-2025":false,
          "date3:3-05-2025":true
        },
        hobbies:{
          s: ["sports;","basket ball","chess","badmitton"],
          m: ["music;","guitar","drums"],
           a:["art;","painting"]
           
        }},
        {
        studentId:922122106025,
        name:"Dharshini",
        grade:8,
        courses:["industrial safety","vlsi","embedded systems","aiml"],
        attendence:{
            "1-05-2025":true,
            "2-05-2025":false,
            "3-05-2025":false
        },
        hobbies:{
          s: ["sports;","basket ball","ludo"],
         m: ["music;","violine","piano"],
          a: ["art;","photography","editing"]
         } },
        {
        studentId:922122106040,
        name:"janani",
        grade:8.9,
        courses:["IOt 4.0","networks and security","embedded systems","aiml"],
        attendence:{
            "1-05-2025":true,
            "2-05-2025":true,
            "3-05-2025":true
        },
        hobbies:{
        s:["sports;","carrom","chess"]              
        }
        }]

        //displaying the students details;
        console.log("PROFILE OF ALL STUDENTS:")
        const displayStudentDetails=()=>{
           for(const student of students){
            console.log(`studentId:${student.studentId}`,
                        `name:${student.name}`,
                         `grade:${student.grade}`,
                         `courses:${student.courses.join(",")}`
            );
            for(const key in student.attendence){
                console.log(`attendence:${student.attendence[key]}`)
                            
                }
                for(const key in student.hobbies){
             console.log(`hobbies:${student.hobbies[key]}`)
            }}}
            displayStudentDetails();

            //filter student by grade;
            const filtered=students.filter((stu)=>stu.grade>8)
            console.log(filtered)

        //find student by id;
           const found=students.find((stu)=>stu.studentId===922122106027)
           console.log(found)

           //record attendence;
           
        //adding course to a student;
        const findStudentById = (studentId) => {
            return students.find(student => student.studentId=== 922122106025);
        };
        
        
        const addCoursetoStudent = (studentId,courses) => {
            const student = findStudentById(studentId);
            if (student) {
                if (!student.courses.includes(courses)) {
                    student.courses.push(courses);
                    console.log(`course "${courses}",added to student Id "${studentId}"`);
                } 
            } else {
                console.log(`student with Id${studentId} not found`);
            }
        };
        console.log("***adding extra course for student '922122106025'");
        addCoursetoStudent (922122106025, "iot");
        console.log("***922122106025 after adding iot")
           const found2=students.find((stu)=>stu.studentId===922122106025)
           console.log(found2)

         //to remove a student;
         const removeStudent=(studentId)=>{
            const student=students.findIndex(rstu=>rstu.studentId===studentId);
            if(student==-1){
                students.splice(student,1);
                console.log(`student with Id "${studentId}" is removed`);}
            else{
                console.log("no student with that Id")
            }}
           console.log("***Remove a student out of profile:") 
           removeStudent('922122106040');
           console.log("***after removing student:")
           displayStudentDetails();

           // to find student with most hobbies;
           const filtered2=students.filter(student=>student.length>4)
            console.log(filtered2)


        
        
         
        



    
