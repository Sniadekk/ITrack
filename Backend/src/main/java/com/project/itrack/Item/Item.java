package com.project.itrack.Item;

import com.project.itrack.Category.Category;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Item {

    public Item(){

    }

    public Item(String name, String description, Integer amount, long price, Category category) {
        this.name = name;
        this.description = description;
        this.amount = amount;
        this.price = price;
        this.category = category;
    }

    @Id
    @GeneratedValue
    private long id;

    private String name;
    private String description;
    private Integer amount;
    private long price;

    private Category category;

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

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}
