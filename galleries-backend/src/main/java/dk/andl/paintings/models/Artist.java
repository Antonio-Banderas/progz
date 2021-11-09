package dk.andl.paintings.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Data
@Table(name="artists")
@Entity
public class Artist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column
    private String image;

    @Column
    private String name;

    @Column
    private int age;

    @Enumerated(value = EnumType.STRING)
    @Column
    private Gender gender;

    @Column(length = 100)
    private String nationality;

    @ManyToOne
    @JoinColumn(name = "gallery_id")
    @Nullable
    private Gallery gallery;

    @JsonIgnore
    @ManyToMany(mappedBy = "artists", fetch = FetchType.LAZY)
    private List<Painting> paintings;

}
