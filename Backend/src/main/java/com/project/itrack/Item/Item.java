package com.project.itrack.Item;

import com.project.itrack.Category.Category;

import javax.persistence.*;

@Entity
public class Item {

    public Item(){

    }

    public Item(String name, String description, Integer amount, long price, Category itemCategory) {
        this.name = name;
        this.description = description;
        this.amount = amount;
        this.price = price;
        this.itemCategory = itemCategory;
    }

    @Id
    @GeneratedValue
    private long id;

    private String name;
    private String description;
    private Integer amount;
    private long price;

    @ManyToOne
    private Category itemCategory;

    public Category getItemCategory() {
        return itemCategory;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public long getPrice() {
        return price;
    }

    public void setPrice(long price) {
        this.price = price;
    }


}