//ON THIS PAGE I WANT IT TO SAY THIS IS THE FUN PAGE, IT WILL HAVE A TABLE SHOWING ALL EXCLUSIVE FLAVORS NOTHING 
// ELSE ON THIS PAGE WILL STAY EXCEPT FOR THE DEFAULT LAYOUT AND ADDING A TABLE WITH FLAVOR NAMES OR PICTURES?
// FLAVOR INDEX PAGE
const React = require('react');
const DefaultLayout = require('../layout/Default')

class Index extends React.Component {
    render() {

        return (
            <DefaultLayout title={"You've made it to the Fun Zone!"}>
                <nav>
                    <a href="/flavors/new">DEEZ COOL FLAVORS</a>  
                </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Index;