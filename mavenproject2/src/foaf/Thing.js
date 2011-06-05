/**
 * generated by http://RDFReactor.semweb4j.org ($Id: CodeGenerator.java 1765 2010-02-11 09:51:13Z max.at.xam.de $) JavaScript extension on 5/29/11 6:28 PM
 */

/**
 * This class manages access to these properties:
 * <ul>
 *   <li> DNAchecksum </li>
 *   <li> Depiction </li>
 *   <li> Description </li>
 *   <li> DisjointWith </li>
 *   <li> EquivalentClass </li>
 *   <li> EquivalentProperty </li>
 *   <li> FoafGivenname </li>
 *   <li> FoafTitle </li>
 *   <li> Fundedby </li>
 *   <li> Givenname </li>
 *   <li> Homepage </li>
 *   <li> InverseOf </li>
 *   <li> Logo </li>
 *   <li> Maker </li>
 *   <li> MembershipClass </li>
 *   <li> Name </li>
 *   <li> Nickname </li>
 *   <li> Page </li>
 *   <li> Phone </li>
 *   <li> Primarytopicof </li>
 *   <li> Termstatus </li>
 *   <li> Theme </li>
 *   <li> Title </li>
 * </ul>
 */
Thing = function(rdf) {
    Object.call(this, rdf);
   
    /** http://www.w3.org/2000/01/rdf-schema#Class */

    /** http://xmlns.com/foaf/0.1/dnaChecksum */
    /** http://xmlns.com/foaf/0.1/depiction */
    /** http://purl.org/dc/elements/1.1/description */
    /** http://www.w3.org/2002/07/owl#disjointWith */
    /** http://www.w3.org/2002/07/owl#equivalentClass */
    /** http://www.w3.org/2002/07/owl#equivalentProperty */
    /** http://xmlns.com/foaf/0.1/givenname */
    /** http://xmlns.com/foaf/0.1/title */
    /** http://xmlns.com/foaf/0.1/fundedBy */
    /** http://xmlns.com/foaf/0.1/givenName */
    /** http://xmlns.com/foaf/0.1/homepage */
    /** http://www.w3.org/2002/07/owl#inverseOf */
    /** http://xmlns.com/foaf/0.1/logo */
    /** http://xmlns.com/foaf/0.1/maker */
    /** http://xmlns.com/foaf/0.1/membershipClass */
    /** http://xmlns.com/foaf/0.1/name */
    /** http://xmlns.com/foaf/0.1/nick */
    /** http://xmlns.com/foaf/0.1/page */
    /** http://xmlns.com/foaf/0.1/phone */
    /** http://xmlns.com/foaf/0.1/isPrimaryTopicOf */
    /** http://www.w3.org/2003/06/sw-vocab-status/ns#term_status */
    /** http://xmlns.com/foaf/0.1/theme */
    /** http://purl.org/dc/elements/1.1/title */

    var queryObject = function(rdf, from, predicate, to) {
        return rdf.where(from + ' ' + predicate + ' ' + to);
    }
 
    var DNAchecksum = new Array();
    queryObject(rdf, "?Thing", "foaf:DNAchecksum", "?DNAchecksum")
        .each(function() {
            DNAchecksum.push(new String(rdf
                .where("DNAchecksum a foaf:DNAchecksum")
                .filter("authority", this.DNAchecksum.value.authority))); 
        });
    this.DNAchecksum = DNAchecksum;
    
    var Depiction = new Array();
    queryObject(rdf, "?Thing", "foaf:Depiction", "?Depiction")
        .each(function() {
            Depiction.push(new Image(rdf
                .where("Depiction a foaf:Depiction")
                .filter("authority", this.Depiction.value.authority))); 
        });
    this.Depiction = Depiction;
    
    var Description = new Array();
    queryObject(rdf, "?Thing", "foaf:Description", "?Description")
        .each(function() {
            Description.push(new Thing(rdf
                .where("Description a foaf:Description")
                .filter("authority", this.Description.value.authority))); 
        });
    this.Description = Description;
    
    var DisjointWith = new Array();
    queryObject(rdf, "?Thing", "foaf:DisjointWith", "?DisjointWith")
        .each(function() {
            DisjointWith.push(new Thing(rdf
                .where("DisjointWith a foaf:DisjointWith")
                .filter("authority", this.DisjointWith.value.authority))); 
        });
    this.DisjointWith = DisjointWith;
    
    var EquivalentClass = new Array();
    queryObject(rdf, "?Thing", "foaf:EquivalentClass", "?EquivalentClass")
        .each(function() {
            EquivalentClass.push(new Thing(rdf
                .where("EquivalentClass a foaf:EquivalentClass")
                .filter("authority", this.EquivalentClass.value.authority))); 
        });
    this.EquivalentClass = EquivalentClass;
    
    var EquivalentProperty = new Array();
    queryObject(rdf, "?Thing", "foaf:EquivalentProperty", "?EquivalentProperty")
        .each(function() {
            EquivalentProperty.push(new Thing(rdf
                .where("EquivalentProperty a foaf:EquivalentProperty")
                .filter("authority", this.EquivalentProperty.value.authority))); 
        });
    this.EquivalentProperty = EquivalentProperty;
    
    var FoafGivenname = new Array();
    queryObject(rdf, "?Thing", "foaf:FoafGivenname", "?FoafGivenname")
        .each(function() {
            FoafGivenname.push(new Thing(rdf
                .where("FoafGivenname a foaf:FoafGivenname")
                .filter("authority", this.FoafGivenname.value.authority))); 
        });
    this.FoafGivenname = FoafGivenname;
    
    var FoafTitle = new Array();
    queryObject(rdf, "?Thing", "foaf:FoafTitle", "?FoafTitle")
        .each(function() {
            FoafTitle.push(new Thing(rdf
                .where("FoafTitle a foaf:FoafTitle")
                .filter("authority", this.FoafTitle.value.authority))); 
        });
    this.FoafTitle = FoafTitle;
    
    var Fundedby = new Array();
    queryObject(rdf, "?Thing", "foaf:Fundedby", "?Fundedby")
        .each(function() {
            Fundedby.push(new org.ontoware.rdfreactor.schema.owl.Thing(rdf
                .where("Fundedby a foaf:Fundedby")
                .filter("authority", this.Fundedby.value.authority))); 
        });
    this.Fundedby = Fundedby;
    
    var Givenname = new Array();
    queryObject(rdf, "?Thing", "foaf:Givenname", "?Givenname")
        .each(function() {
            Givenname.push(new Thing(rdf
                .where("Givenname a foaf:Givenname")
                .filter("authority", this.Givenname.value.authority))); 
        });
    this.Givenname = Givenname;
    
    var Homepage = new Array();
    queryObject(rdf, "?Thing", "foaf:Homepage", "?Homepage")
        .each(function() {
            Homepage.push(new Document(rdf
                .where("Homepage a foaf:Homepage")
                .filter("authority", this.Homepage.value.authority))); 
        });
    this.Homepage = Homepage;
    
    var InverseOf = new Array();
    queryObject(rdf, "?Thing", "foaf:InverseOf", "?InverseOf")
        .each(function() {
            InverseOf.push(new Thing(rdf
                .where("InverseOf a foaf:InverseOf")
                .filter("authority", this.InverseOf.value.authority))); 
        });
    this.InverseOf = InverseOf;
    
    var Logo = new Array();
    queryObject(rdf, "?Thing", "foaf:Logo", "?Logo")
        .each(function() {
            Logo.push(new org.ontoware.rdfreactor.schema.owl.Thing(rdf
                .where("Logo a foaf:Logo")
                .filter("authority", this.Logo.value.authority))); 
        });
    this.Logo = Logo;
    
    var Maker = new Array();
    queryObject(rdf, "?Thing", "foaf:Maker", "?Maker")
        .each(function() {
            Maker.push(new Agent(rdf
                .where("Maker a foaf:Maker")
                .filter("authority", this.Maker.value.authority))); 
        });
    this.Maker = Maker;
    
    var MembershipClass = new Array();
    queryObject(rdf, "?Thing", "foaf:MembershipClass", "?MembershipClass")
        .each(function() {
            MembershipClass.push(new Thing(rdf
                .where("MembershipClass a foaf:MembershipClass")
                .filter("authority", this.MembershipClass.value.authority))); 
        });
    this.MembershipClass = MembershipClass;
    
    var Name = new Array();
    queryObject(rdf, "?Thing", "foaf:Name", "?Name")
        .each(function() {
            Name.push(new String(rdf
                .where("Name a foaf:Name")
                .filter("authority", this.Name.value.authority))); 
        });
    this.Name = Name;
    
    var Nickname = new Array();
    queryObject(rdf, "?Thing", "foaf:Nickname", "?Nickname")
        .each(function() {
            Nickname.push(new Thing(rdf
                .where("Nickname a foaf:Nickname")
                .filter("authority", this.Nickname.value.authority))); 
        });
    this.Nickname = Nickname;
    
    var Page = new Array();
    queryObject(rdf, "?Thing", "foaf:Page", "?Page")
        .each(function() {
            Page.push(new Document(rdf
                .where("Page a foaf:Page")
                .filter("authority", this.Page.value.authority))); 
        });
    this.Page = Page;
    
    var Phone = new Array();
    queryObject(rdf, "?Thing", "foaf:Phone", "?Phone")
        .each(function() {
            Phone.push(new Thing(rdf
                .where("Phone a foaf:Phone")
                .filter("authority", this.Phone.value.authority))); 
        });
    this.Phone = Phone;
    
    var Primarytopicof = new Array();
    queryObject(rdf, "?Thing", "foaf:Primarytopicof", "?Primarytopicof")
        .each(function() {
            Primarytopicof.push(new Document(rdf
                .where("Primarytopicof a foaf:Primarytopicof")
                .filter("authority", this.Primarytopicof.value.authority))); 
        });
    this.Primarytopicof = Primarytopicof;
    
    var Termstatus = new Array();
    queryObject(rdf, "?Thing", "foaf:Termstatus", "?Termstatus")
        .each(function() {
            Termstatus.push(new Thing(rdf
                .where("Termstatus a foaf:Termstatus")
                .filter("authority", this.Termstatus.value.authority))); 
        });
    this.Termstatus = Termstatus;
    
    var Theme = new Array();
    queryObject(rdf, "?Thing", "foaf:Theme", "?Theme")
        .each(function() {
            Theme.push(new org.ontoware.rdfreactor.schema.owl.Thing(rdf
                .where("Theme a foaf:Theme")
                .filter("authority", this.Theme.value.authority))); 
        });
    this.Theme = Theme;
    
    var Title = new Array();
    queryObject(rdf, "?Thing", "foaf:Title", "?Title")
        .each(function() {
            Title.push(new Thing(rdf
                .where("Title a foaf:Title")
                .filter("authority", this.Title.value.authority))); 
        });
    this.Title = Title;
    

    this.equals = function(o) {
        if(!(o instanceof Thing)) {
            return false;
        }
        if(Object.prototype.equals.call(this)) {
            return false;
        }
        return true;
    }
    
}
Thing.prototype = new Object();
