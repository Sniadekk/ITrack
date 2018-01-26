package com.project.itrack.Category;

import com.project.itrack.Item.Item;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;
import java.util.*;

@Entity
@Table(name = "categories")
public class Category {
    Category() {

    }

    Category(String name) {
        this.name = name;
    }

    @Id
    @GeneratedValue
    private Long id;

    @Column(length = 250)
    private String name;

    @OneToMany(mappedBy = "itemCategory", cascade = CascadeType.ALL)
    private List<Item> items;

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

    public List<Item> getItems() {
        return items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }
}
