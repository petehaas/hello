// Title:  Hello
// Author:  Pete Haas
// Description: Hi, my name is Pete Haas.  I have been a developer for the past 19 years.
//              Currently managing application development for a company outside Chicago.

var myHistory ={

    summary: [
        {year:  1996, description: 'Hired as a systems programmer coding C'},
        {year:  2001, description: 'Started using C# on .NET for all development'},
        {year:  2004, description: 'Team lead working on .NET for Experian'},
        {year:  2005, description: 'Hired by Verascape as their Application Development Manager'},
        {year:  2007, description: 'Went from 0% to 100% of all calls going through applications created in my department'},
        {year:  2010, description: 'Started working on javascript development in my spare time'},
        {year:  2015, description: 'Created all user interfaces in Angular with a REST back-end'},
    ],

    education: {
        bachelor_degree: 'Yes',
        master_degree: 'That too'
    },

    languages: {
        javascript: 'Check',
        C_sharp: 'Yes',
        SQL: 'You betcha'
    },

    frameworks: {
        javascriptFrameworks: {
            angular: 'sure',
            react: 'a few sample apps',
            backbone: 'a while back, yep',
            typescript: 'learning it at the moment...'
        },
        dotNetFramework: {
            experience: true,
            comments: 'since it was in beta'

        }
     }
};

getHistory = function() {
    return (myHistory);
};