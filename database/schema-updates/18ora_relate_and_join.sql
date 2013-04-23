create table feature_type_relation (
    id number(19,0) not null,
    type varchar2(255 char),
    feature_type number(19,0),
    foreign_feature_type number(19,0),
    primary key (id)
);

create table feature_type_relation_key (
    id number(19,0) not null,
    left_side number(19,0),
    relation number(19,0),
    right_side number(19,0),
    primary key (id)
);

alter table feature_type_relation 
    add constraint FK1CA203D8C6F0470B 
    foreign key (foreign_feature_type) 
    references feature_type;

alter table feature_type_relation 
    add constraint FK1CA203D8B7916580 
    foreign key (feature_type) 
    references feature_type;

alter table feature_type_relation_key 
    add constraint FK31F92578AD91C807 
    foreign key (relation) 
    references feature_type_relation;

alter table feature_type_relation_key 
    add constraint FK31F92578E0CA5659 
    foreign key (left_side) 
    references attribute_descriptor;

alter table feature_type_relation_key 
    add constraint FK31F9257826403964 
    foreign key (right_side) 
    references attribute_descriptor;
