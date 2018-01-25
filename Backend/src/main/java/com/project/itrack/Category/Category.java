package com.project.itrack.Category;

import com.project.itrack.Item.Item;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="categories")
public class Category {
    Category(){

    }

    Category(String name) {
        this.name = name;
    }

    @Id

    @GeneratedValue
    private Long id;

    @Column(length = 250)
    private String name;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
