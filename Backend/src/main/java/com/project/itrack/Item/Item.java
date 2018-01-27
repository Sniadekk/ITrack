package com.project.itrack.Item;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.project.itrack.Category.Category;

import javax.persistence.*;

@Table(name="items")
@Entity
public class Item {

    public Item(){

    }

    public Item(String name, String description, Integer amount, long price, Category itemCategory, String measureUnit) {
        this.name = name;
        this.description = description;
        this.amount = amount;
        this.price = price;
        this.itemCategory = itemCategory;
        this.measureUnit = measureUnit;

    }

    @Id
    @GeneratedValue
    private long id;

    @Column(length = 300)
    private String name;

    @Column(length = 5000)
    private String description;

    private Integer amount;
    private long price;
    private String measureUnit;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="item_category_id")
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

    public void setItemCategory(Category itemCategory) {
        this.itemCategory = itemCategory;
    }

    public String getMeasureUnit() {
        return measureUnit;
    }

    public void setMeasureUnit(String measureUnit) {
        this.measureUnit = measureUnit;
    }

}
